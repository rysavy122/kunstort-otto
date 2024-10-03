// Angular
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Services
import {
  ForschungsFrageService,
  KommentarService,
  RoleService,
  FreezePolylogService,
  CommentPositionService,
  MediaPositionService,
  MediaService,
  MediaPosition,
} from '@app/core';
import { ToastrService } from 'ngx-toastr';

// Models & Interfaces
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import {
  KommentarModel,
  FileModel,
  CommentPosition,
  KommentarDisplayModel,
} from '@app/core';

// Components
import { CommentDialogComponent } from 'src/app/shared/components/dialog/comment-dialog.component';

// Third Party
import {
  debounceTime,
  firstValueFrom,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-polylog',
  templateUrl: './polylog.component.html',
})
export class PolylogComponent implements OnInit, AfterViewInit, OnDestroy {
  faCloudUploadAlt = faCloudUploadAlt;
  forschungsfrage?: string = '';
  currentForschungsfrageId?: number;
  selectedMediaName: string = '';
  selectedMedia: File | null = null;
  isUploaded: boolean = false;
  imagePath?: string;
  freezePolylog: boolean = false;
  icon: string = 'upload';
  isMenuOpen: boolean = false;
  activeCommentId: number | null = null;
  kommentare: KommentarDisplayModel[] = [];
  mediaFiles: FileModel[] = [];
  mediaUrls: string[] = [];
  isAdmin: boolean = false;
  role: string | null = null;
  hasFileUploadAccess: boolean = false;

  videoPositions: { [index: number]: any } = {};
  imagePositions: { [index: number]: any } = {};
  audioPositions: { [index: number]: any } = {};

  imageUrls: string[] = [];
  videoUrls: string[] = [];
  audioUrls: string[] = [];

  mediaisLoading: boolean = false;

  private forschungsfragenSubscription?: Subscription;
  private positionUpdateSubject = new Subject<
    CommentPosition | MediaPosition
  >();
  private destroy$ = new Subject<void>();

  isImage(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  isVideo(url: string): boolean {
    return url.match(/\.(mp4|webm)$/) != null;
  }

  isAudio(url: string): boolean {
    return url.match(/\.(mp3|wav)$/) != null;
  }
  errorMessage: string = 'Fehler beim laden der Forschungsfrage.';
  isDialogOpen: boolean = false;
  private commentPositions: { [kommentarId: number]: CommentPosition } = {};
  public mediaPositions: { [fileModelId: number]: MediaPosition } = {};

  @ViewChildren('draggableCommentElement')
  draggableElements!: QueryList<ElementRef>;
  @ViewChildren('draggableMediaElement')
  draggableMediaElements!: QueryList<ElementRef>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('commentDialog') commentDialog!: CommentDialogComponent;

  constructor(
    private forschungsfrageService: ForschungsFrageService,
    private freezePolylogService: FreezePolylogService,
    public roleService: RoleService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private mediaService: MediaService,
    private commentPositionService: CommentPositionService,
    private mediaPositionService: MediaPositionService,
    private kommentarService: KommentarService
  ) { }

  // Initialize things

  async ngOnInit(): Promise<void> {
    this.fetchLatestForschungsfrage();
    this.listenForNewForschungsfrage();
    this.loadKommentare();
    this.setupPositionUpdates();

    await Promise.all([this.loadCommentPositions(), this.loadMediaPositions()]);

    this.freezePolylogService.getFreezeState().subscribe((state) => {
      this.freezePolylog = state;
    });
    this.role = this.roleService.getRole();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (this.role === 'Team' || this.role === 'Künstler') {
      this.hasFileUploadAccess = true;
    }
  }
  ngOnDestroy(): void {
    this.forschungsfragenSubscription?.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    if (this.isAdmin) {
      this.initializeDraggable();
    }
  }

  private setupPositionUpdates(): void {
    this.positionUpdateSubject
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((position) => {
        if ('kommentarId' in position) {
          this.saveCommentPosition(position as CommentPosition);
        } else if ('fileModelId' in position) {
          this.saveMediaPosition(position as MediaPosition);
        }
      });
  }

  private async loadCommentPositions(): Promise<void> {
    try {
      const positions = await firstValueFrom(
        this.commentPositionService.getCommentPositions()
      );
      positions.forEach((position) => {
        this.commentPositions[position.kommentarId] = position;
      });
      console.log('Loaded positions:', this.commentPositions);
    } catch (error) {
      console.error('Error loading comment positions:', error);
    }
  }
  private async loadMediaPositions(): Promise<void> {
    try {
      const positions = await firstValueFrom(
        this.mediaPositionService.getMediaPositions()
      );
      positions.forEach((position) => {
        this.mediaPositions[position.fileModelId] = position;
      });
      console.log('Loaded media positions:', this.mediaPositions);
    } catch (error) {
      console.error('Error loading media positions:', error);
    }
  }

  editKommentar(commentId: number): void {
    // Logic to handle editing a comment
  }

  onMediaSelected(event: any) {
    this.selectedMedia = event.target.files[0];
    if (this.selectedMedia) {
      this.selectedMediaName = this.selectedMedia.name;
    }
    // Add any additional logic if needed when a file is selected
  }
  cancelUpload() {
    this.selectedMedia = null;
    this.selectedMediaName = '';
    this.fileInput.nativeElement.value = '';
    // Add any additional logic if needed when upload is canceled
  }
  uploadMedia() {
    if (!this.selectedMedia || this.currentForschungsfrageId === null) {
      this.toastr.warning('Bitte wähle eine Datei zum Upload aus.');
      return;
    }

    this.mediaisLoading = true;

    this.mediaService
      .uploadMedia(this.selectedMedia, this.currentForschungsfrageId!)
      .subscribe({
        next: (response) => {
          this.toastr.success('Medium erfolgreich hochgeladen!');
          this.selectedMedia = null;
          this.selectedMediaName = '';
          this.mediaisLoading = false;

          this.fetchMediaFiles();
        },
        error: (error) => {
          this.toastr.error('Fehler beim Hochladen des Mediums.');
          console.error('Error uploading media:', error);
          this.mediaisLoading = false;
        },
      });
  }

  // Handle Forschungsfrage
  fetchLatestForschungsfrage() {
    this.forschungsfrageService.getLatestForschungsfrage().subscribe({
      next: (forschungsfrage: ForschungsfragenModel) => {
        this.forschungsfrage = forschungsfrage.title;
        this.imagePath = forschungsfrage.imagePath;
        this.currentForschungsfrageId = forschungsfrage.id;
        this.clearKommentare();
        this.fetchMediaFiles();
        console.log(
          'Forschungsfrage updated. ID:',
          this.currentForschungsfrageId
        );
      },
      error: () => {
        this.forschungsfrage = this.errorMessage;
      },
    });
  }
  listenForNewForschungsfrage(): void {
    this.forschungsfragenSubscription =
      this.forschungsfrageService.forschungsfragen$.subscribe(() => {
        if (this.currentForschungsfrageId) {
          this.fetchLatestForschungsfrage();
        }
      });
  }
  openDialog(parentId?: number) {
    this.isDialogOpen = true;
    this.commentDialog.parentKommentarId = parentId;
  }
  openReplyDialog(parentId: number) {
    this.openDialog(parentId);
    this.isMenuOpen = false;
  }
  closeDialog() {
    this.isDialogOpen = false;
  }
  toggleMenu(commentId: number): void {
    this.isMenuOpen = this.activeCommentId !== commentId || !this.isMenuOpen;
    this.activeCommentId = commentId;
  }

  // Handle Kommentare
  getSafeHtml(content: string | undefined): SafeHtml | string {
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
  }
  clearKommentare() {
    this.kommentare = [];
  }
  onCommentSubmitted(newKommentar: KommentarModel): void {
    if (!newKommentar) return;

    const kommentarWithPosition = this.assignRandomPosition(newKommentar);

    if (newKommentar.parentKommentarId == null) {
      this.kommentare.push(kommentarWithPosition);
    } else {
      const parentIndex = this.kommentare.findIndex(
        (k) => k.id === newKommentar.parentKommentarId
      );

      if (parentIndex !== -1) {
        const parentKommentar = this.kommentare[parentIndex];

        if (parentKommentar) {
          if (!parentKommentar.replies) {
            parentKommentar.replies = [];
          }
          parentKommentar.replies.push(kommentarWithPosition);
        }
      }
    }

    this.loadKommentare();
  }
  addReplyToKommentar(
    kommentare: KommentarDisplayModel[],
    reply: KommentarModel
  ) {
    for (let kommentar of kommentare) {
      if (kommentar.id === reply.parentKommentarId) {
        if (!kommentar.replies) kommentar.replies = [];
        kommentar.replies.push(this.assignRandomPosition(reply));
        return;
      } else if (kommentar.replies && kommentar.replies.length) {
        this.addReplyToKommentar(kommentar.replies, reply);
      }
    }
  }

  fetchMediaFiles(): void {
    this.mediaService.getAllMedia(this.currentForschungsfrageId!).subscribe({
      next: (files) => {
        this.mediaFiles = files;

        if (files && files.length > 0) {
          this.imageUrls = files
            .filter(
              (file) =>
                this.isImage(file.fileType!) &&
                file.blobStorageUri !== undefined
            )
            .map((file) => file.blobStorageUri as string);

          this.videoUrls = files
            .filter(
              (file) =>
                this.isVideo(file.fileType!) &&
                file.blobStorageUri !== undefined
            )
            .map((file) => file.blobStorageUri as string);

          this.audioUrls = files
            .filter(
              (file) =>
                this.isAudio(file.fileType!) &&
                file.blobStorageUri !== undefined
            )
            .map((file) => file.blobStorageUri as string);

          this.preCalculateMediaPositions();
          setTimeout(() => this.initializeDraggable(), 0);
        } else {
          console.log('No media files found.');
        }
      },
      error: (error) => {
        console.error('Error fetching media:', error);
      },
    });
  }

  preCalculateMediaPositions(): void {
    this.videoUrls.forEach((_, index) => {
      const x = Math.floor(Math.random() * window.innerWidth - 250);
      const y = Math.floor(Math.random() * window.innerHeight - 850);
      this.videoPositions[index] = {
        transform: `translateX(${x}px) translateY(${y}px)`,
      };
    });
    this.imageUrls.forEach((_, index) => {
      const x = Math.floor(Math.random() * window.innerWidth - 250);
      const y = Math.floor(Math.random() * window.innerHeight - 850);
      this.imagePositions[index] = {
        transform: `translateX(${x}px) translateY(${y}px)`,
      };
    });
    this.audioUrls.forEach((_, index) => {
      const x = Math.floor(Math.random() * window.innerWidth - 250);
      const y = Math.floor(Math.random() * window.innerHeight - 850);
      this.audioPositions[index] = {
        transform: `translateX(${x}px) translateY(${y}px)`,
      };
    });
  }

  loadKommentare(): void {
    this.kommentarService.getAllKommentare().subscribe(kommentare => {
      this.kommentare = kommentare.map((k: KommentarModel) => {
        // Only assign a random position if the comment doesn't already have one
        return this.assignRandomPosition(k);
      });
      setTimeout(() => this.initializeDraggable(), 0);
    });
  }

  deleteKommentar(id: number): void {
    this.kommentarService.deleteKommentar(id).subscribe(() => {
      this.removeCommentById(this.kommentare, id);
    });
  }


  deleteMedia(media: FileModel): void {
    const urlParts = media.fileName?.split('/');
    const fileName = urlParts![urlParts!.length - 1];
    const index = this.mediaFiles.findIndex((m) => m.id === media.id);

    if (index > -1) {
      this.mediaFiles.splice(index, 1);
    }

    this.mediaService.deleteMedia(fileName!).subscribe({
      next: () => {
        this.toastr.success('Medium erfolgreich gelöscht.');
      },
      error: (error) => {
        this.toastr.error('Fehler beim Löschen des Mediums.');
        console.error('Error deleting media:', error);
        this.mediaFiles.splice(index, 0, media);
      },
    });
  }

  removeCommentById(kommentare: KommentarDisplayModel[], id: number): void {
    const index = kommentare.findIndex(comment => comment.id === id);
    if (index > -1) {
      kommentare.splice(index, 1);  // Remove the comment by ID
    }
    // Ensure positions are recalculated only for remaining comments
    this.loadPositions();
    this.loadCommentPositions();  // Reload saved positions from the backend
  }


  trackById(index: number, item: KommentarModel): number {
    return item.id!;
  }

  assignRandomPosition(comment: KommentarModel): KommentarDisplayModel {
    const displayComment = comment as KommentarDisplayModel;

    // Check if the comment already has a saved position (loaded from backend)
    const savedPosition = this.commentPositions[comment.id!];

    // If the comment has a saved position, use it
    if (savedPosition) {
      return {
        ...displayComment,
        style: {
          transform: `translateX(${savedPosition.xPosition}px) translateY(${Math.max(savedPosition.yPosition, 0)}px)`,
          borderTop: `60px solid ${savedPosition.borderColor || this.generateRandomColor()}`,
          borderRight: `60px solid ${savedPosition.borderColor || this.generateRandomColor()}`,
          borderBottom: `30px solid ${savedPosition.borderColor || this.generateRandomColor()}`,
          borderLeft: `20px solid ${savedPosition.borderColor || this.generateRandomColor()}`,
          color: '#000000',
        },
      };
    }

    // If the comment doesn't have a saved position, assign a random position
    const x = Math.floor(Math.random() * (window.innerWidth - 250));
    const y = Math.floor(Math.random() * (Math.max(window.innerHeight - 1050, 0)));
    const borderColor = this.generateRandomColor();

    return {
      ...displayComment,
      style: {
        transform: `translateX(${x}px) translateY(${Math.max(y, 0)}px)`,
        borderTop: `60px solid ${borderColor}`,
        borderRight: `60px solid ${borderColor}`,
        borderBottom: `30px solid ${borderColor}`,
        borderLeft: `20px solid ${borderColor}`,
        color: '#000000',
      },
    };
  }

  //Random Colours
  generateRandomColor(): string {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const part = Math.floor(Math.random() * 256).toString(16);
      color += part.padStart(2, '0');
    }

    if (this.isColorUnacceptable(color)) {
      return this.generateRandomColor();
    }
    return color;
  }
  isColorUnacceptable(color: string): boolean {
    const unacceptableColors = ['#000000', '#ffffff', '#e21c52'];
    const colorDistanceThreshold = 150;

    for (let unacceptable of unacceptableColors) {
      if (this.getColorDistance(color, unacceptable) < colorDistanceThreshold) {
        return true;
      }
    }
    return false;
  }
  getColorDistance(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    if (!rgb1 || !rgb2) return 0;

    let distance = 0;
    distance += Math.pow(rgb1.r - rgb2.r, 2);
    distance += Math.pow(rgb1.g - rgb2.g, 2);
    distance += Math.pow(rgb1.b - rgb2.b, 2);
    return Math.sqrt(distance);
  }
  onDragEnd(commentId: number, event: any): void {
    const element = event.target;
    const x = parseFloat(gsap.getProperty(element, 'x') as string);
    const y = parseFloat(gsap.getProperty(element, 'y') as string);

    const position: CommentPosition = {
      kommentarId: commentId,
      xPosition: x,
      yPosition: y,
      borderColor: this.generateRandomColor(),
    };

    console.log('Saving comment position:', position);

    this.commentPositionService.saveCommentPosition(position).subscribe({
      next: (response) => {
        console.log('Comment position saved:', response);
      },
      error: (error) => {
        console.error('Error saving comment position:', error);
      },
    });
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
      : null;
  }

  private initializeDraggable(): void {
    this.initializeDraggableComments();
    this.initializeDraggableMedia();
  }

  private initializeDraggableComments(): void {
    this.draggableElements.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const commentId = parseInt(element.getAttribute('data-comment-id'), 10);
      const savedPosition = this.commentPositions[commentId];

      if (savedPosition) {
        gsap.set(element, {
          x: savedPosition.xPosition,
          y: savedPosition.yPosition,
        });
        element.style.borderColor =
          savedPosition.borderColor || this.generateRandomColor();
      }

      Draggable.create(element, {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDrag: () => this.updatePosition(commentId, element),
        onDragEnd: () => this.updatePosition(commentId, element),
      });
    });

  }

  private initializeDraggableMedia(): void {
    this.draggableMediaElements.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const fileModelId = parseInt(element.getAttribute('data-file-id'), 10);
      const savedPosition = this.mediaPositions[fileModelId];

      if (savedPosition) {
        gsap.set(element, {
          x: savedPosition.xPosition,
          y: savedPosition.yPosition,
        });
      }

      Draggable.create(element, {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDrag: () => this.updateMediaPosition(fileModelId, element),
        onDragEnd: () => this.updateMediaPosition(fileModelId, element),
      });
    });
  }
  private updatePosition(commentId: number, element: HTMLElement): void {
    const x = parseFloat(gsap.getProperty(element, 'x') as string);
    const y = parseFloat(gsap.getProperty(element, 'y') as string);

    if (!isNaN(x) && !isNaN(y)) {
      const position: CommentPosition = {
        kommentarId: commentId,
        xPosition: x,
        yPosition: y,
        borderColor: element.style.borderColor || this.generateRandomColor(),
      };
      this.positionUpdateSubject.next(position);
    }
  }

  private updateMediaPosition(fileModelId: number, element: HTMLElement): void {
    const x = parseFloat(gsap.getProperty(element, 'x') as string);
    const y = parseFloat(gsap.getProperty(element, 'y') as string);

    if (!isNaN(x) && !isNaN(y) && fileModelId) {
      const position: MediaPosition = {
        fileModelId: fileModelId,
        xPosition: x,
        yPosition: y,
      };
      this.positionUpdateSubject.next(position);
    }
  }

  onMediaDragEnd(fileModelId: number, event: any): void {
    const element = event.target;
    const x = parseFloat(element.style.left || '0');
    const y = parseFloat(element.style.top || '0');

    const position = {
      fileModelId: fileModelId,
      xPosition: x,
      yPosition: y,
    };

    this.mediaPositionService.saveMediaPosition(position).subscribe({
      next: (response) => {
        console.log('Media position saved:', response);
      },
      error: (error) => {
        console.error('Error saving media position:', error);
      },
    });
  }
  private saveCommentPosition(position: CommentPosition): void {
    this.commentPositionService.saveCommentPosition(position).subscribe({
      next: (response) => {
        console.log('Position saved:', response);
        this.commentPositions[position.kommentarId] = response;
      },
      error: (error) => console.error('Error saving position:', error),
    });
  }
  private saveMediaPosition(position: MediaPosition): void {
    this.mediaPositionService.saveMediaPosition(position).subscribe({
      next: (response) => {
        console.log('Position saved:', response);
        this.mediaPositions[position.fileModelId] = response;
      },
      error: (error) => console.error('Error saving position:', error),
    });
  }
  loadPositions(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let commentPositionsLoaded = false;
      let mediaPositionsLoaded = false;

      this.commentPositionService.getCommentPositions().subscribe(
        (positions) => {
          console.log('Comment Positions:', positions);
          positions.forEach((pos) => {
            this.commentPositions[pos.kommentarId] = {
              kommentarId: pos.kommentarId,
              xPosition: pos.xPosition,
              yPosition: pos.yPosition,
              borderColor: pos.borderColor,
            };
          });
          commentPositionsLoaded = true;
          if (commentPositionsLoaded && mediaPositionsLoaded) {
            resolve();
          }
        },
        (error) => {
          console.error('Error loading comment positions:', error);
          reject();
        }
      );

      this.mediaPositionService.getMediaPositions().subscribe(
        (positions) => {
          console.log('Media Positions:', positions);
          positions.forEach((pos) => {
            this.mediaPositions[pos.fileModelId] = {
              fileModelId: pos.fileModelId,
              xPosition: pos.xPosition,
              yPosition: pos.yPosition,
            };
          });
          mediaPositionsLoaded = true;
          if (commentPositionsLoaded && mediaPositionsLoaded) {
            resolve();
          }
        },
        (error) => {
          console.error('Error loading media positions:', error);
          reject();
        }
      );
    });
  }
}
