// Angular
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Services
import { FileModel, ForschungsFrageService, MediaDisplayModel, MediaPosition } from '@app/core';
import { KommentarService } from 'src/app/core/services/kommentar.service';
import { AuthService } from '@auth0/auth0-angular';
import { RoleService } from 'src/app/core/services/role.service';
import { MediaService } from 'src/app/core/services/media.service';
import { FreezePolylogService } from 'src/app/core/services/freeze-polylog.service';
import { ToastrService } from 'ngx-toastr';
import { CommentPositionService } from '@app/core';
import { MediaPositionService } from 'src/app/core/services/media-position.service';

// Models & Interfaces
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { KommentarModel, KommentarDisplayModel } from 'src/app/core/models/kommentar.model';
import { CommentPosition } from '@app/core';

// Components
import { CommentDialogComponent } from 'src/app/shared/components/dialog/comment-dialog.component';

// Third Party
import { debounceTime, firstValueFrom, Subject, Subscription, takeUntil } from 'rxjs';
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

  videoPositions: { [index: number]: any } = {};
  imagePositions: { [index: number]: any } = {};
  audioPositions: { [index: number]: any } = {};

  imageUrls: string[] = [];
  videoUrls: string[] = [];
  audioUrls: string[] = [];




  mediaisLoading: boolean = false;

  private forschungsfragenSubscription?: Subscription;
  private positionUpdateSubject = new Subject<CommentPosition | MediaPosition>();
  private destroy$ = new Subject<void>();




/*   get imageUrls(): string[] {
    return this.mediaUrls.filter(url => this.isImage(url));
  }

  get videoUrls(): string[] {
    return this.mediaUrls.filter(url => this.isVideo(url));
  }

  get audioUrls(): string[] {
    return this.mediaUrls.filter(url => this.isAudio(url));
  }
 */


  isImage(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  isVideo(url: string): boolean {
    return url.match(/\.(mp4|webm)$/) != null;
  }

  isAudio(url: string): boolean {
    return url.match(/\.(mp3|wav)$/) != null;
  }

  private resizeTimeout?: number;
  errorMessage: string = 'Fehler beim laden der Forschungsfrage.';
  isDialogOpen: boolean = false;
  private commentPositions: { [kommentarId: number]: CommentPosition } = {};
  public mediaPositions: { [fileModelId: number]: MediaPosition } = {};

  @ViewChildren('draggableCommentElement') draggableElements!: QueryList<ElementRef>;
  @ViewChildren('draggableMediaElement') draggableMediaElements!: QueryList<ElementRef>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('commentDialog') commentDialog!: CommentDialogComponent;





  constructor(
    private forschungsfrageService: ForschungsFrageService,
    private freezePolylogService: FreezePolylogService,
    public  roleService: RoleService,
    private auth: AuthService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private mediaService: MediaService,
    private commentPositionService: CommentPositionService,
    private mediaPositionService: MediaPositionService,
    private kommentarService: KommentarService) { }




  // Initialize things

  async ngOnInit(): Promise<void>{
    this.fetchLatestForschungsfrage();
    this.listenForNewForschungsfrage();
    this.loadKommentare();
    //this.loadPositions();
    this.setupPositionUpdates();

    await Promise.all([
      this.loadCommentPositions(),
      this.loadMediaPositions()
    ]);

    this.freezePolylogService.getFreezeState().subscribe((state)=>{
      this.freezePolylog = state;
    })
    this.role = this.roleService.getRole();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
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
    this.positionUpdateSubject.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(position => {
      if ('kommentarId' in position) {
        this.saveCommentPosition(position as CommentPosition);
      } else if ('fileModelId' in position) {
        this.saveMediaPosition(position as MediaPosition);
      }
    });
  }

  private async loadCommentPositions(): Promise<void> {
    try {
      const positions = await firstValueFrom(this.commentPositionService.getCommentPositions());
      positions.forEach(position => {
        this.commentPositions[position.kommentarId] = position;
      });
      console.log('Loaded positions:', this.commentPositions);
    } catch (error) {
      console.error('Error loading comment positions:', error);
    }
  }
  private async loadMediaPositions(): Promise<void> {
    try {
      const positions = await firstValueFrom(this.mediaPositionService.getMediaPositions());
      positions.forEach(position => {
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

  this.mediaService.uploadMedia(this.selectedMedia, this.currentForschungsfrageId!).subscribe({
      next: (response) => {
        this.toastr.success('Medium erfolgreich hochgeladen !');
        this.mediaUrls.push(response.url);
        this.mediaisLoading = false;
        this.selectedMedia = null;
        this.preCalculateMediaPositions();
        setTimeout(() => this.initializeDraggable(), 0);
      },
      error: (error) => {
        this.toastr.error('Fehler beim hochladen des Mediums.');
        console.error('Error uploading media:', error);
        this.mediaisLoading = false;
      }
    });
    setTimeout(() => this.initializeDraggable(), 0);
  }

// Handle Forschungsfrage
fetchLatestForschungsfrage() {
  this.forschungsfrageService.getLatestForschungsfrage().subscribe({
    next: (forschungsfrage: ForschungsfragenModel) => {
      this.forschungsfrage = forschungsfrage.title;
      this.imagePath = forschungsfrage.imagePath;
      this.currentForschungsfrageId = forschungsfrage.id;
      this.clearKommentare();
      this.fetchMediaFiles(); // Fetch the media URLs
      console.log('Forschungsfrage updated. ID:', this.currentForschungsfrageId); // Log the ID

    },
    error: () => {
      this.forschungsfrage = this.errorMessage;
    }
  });
}
listenForNewForschungsfrage(): void {
  this.forschungsfragenSubscription = this.forschungsfrageService.forschungsfragen$.subscribe(() => {
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
    this.isMenuOpen =false;

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
      const parentIndex = this.kommentare.findIndex(k => k.id === newKommentar.parentKommentarId);

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
  addReplyToKommentar(kommentare: KommentarDisplayModel[], reply: KommentarModel) {
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

        // Categorize media files based on their type and filter out undefined blobStorageUri
        this.imageUrls = files
          .filter(file => this.isImage(file.fileType!) && file.blobStorageUri !== undefined)  // Filter out undefined URLs
          .map(file => file.blobStorageUri as string);  // Cast to string after filtering

        this.videoUrls = files
          .filter(file => this.isVideo(file.fileType!) && file.blobStorageUri !== undefined)
          .map(file => file.blobStorageUri as string);

        this.audioUrls = files
          .filter(file => this.isAudio(file.fileType!) && file.blobStorageUri !== undefined)
          .map(file => file.blobStorageUri as string);

        // Additional logic to set positions if needed
        this.preCalculateMediaPositions();
        setTimeout(() => this.initializeDraggable(), 0);
      },
      error: (error) => {
        console.error('Error fetching media:', error);
        this.toastr.error('Error fetching media.');
      }
    });
  }


preCalculateMediaPositions(): void {

  this.videoUrls.forEach((_, index) => {
    const x = Math.floor(Math.random() * window.innerWidth - 250);
    const y = Math.floor(Math.random() * window.innerHeight - 850);
    this.videoPositions[index] = { transform: `translateX(${x}px) translateY(${y}px)` };
  });
  this.imageUrls.forEach((_, index) => {
    const x = Math.floor(Math.random() * window.innerWidth - 250);
    const y = Math.floor(Math.random() * window.innerHeight - 850);
    this.imagePositions[index] = { transform: `translateX(${x}px) translateY(${y}px)` };
  });
  this.audioUrls.forEach((_, index) => {
    const x = Math.floor(Math.random() * window.innerWidth - 250);
    const y = Math.floor(Math.random() * window.innerHeight - 850);
    this.audioPositions[index] = { transform: `translateX(${x}px) translateY(${y}px)` };
  });
}

  loadKommentare(): void {
    this.kommentarService.getAllKommentare().subscribe(kommentare => {
      this.kommentare = kommentare.map((k: KommentarModel) => this.assignRandomPosition(k));
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
    const fileName = urlParts![urlParts!.length - 1];// Assuming the filename is the last part of the URL

    // Attempt to delete the media on the server
    this.mediaService.deleteMedia(fileName!).subscribe({
      next: () => {
        this.toastr.success('Medium erfolgreich gelöscht.');

      },
      error: (error) => {
        // Rollback: If deletion failed, restore the media item to the UI
        //this.toastr.error('Error deleting media.');
        console.error('Error deleting media:', error);
      }
    });
          // Optimistically remove the media from the UI
          const index = this.mediaUrls.indexOf(media.blobStorageUri!);
          if (index > -1) {
            this.mediaUrls.splice(index, 1);
            this.toastr.success('Medium erfolgreich gelöscht.');
          } else {
            this.toastr.error('Fehler beim löschen des Mediums.');
          }
  }



  removeCommentById(kommentare: KommentarDisplayModel[], id: number): void {
    for (let i = 0; i < kommentare.length; i++) {
      if (kommentare[i].id === id) {
        kommentare.splice(i, 1);
        return;
      } else if (kommentare[i].replies) {
        this.removeCommentById(kommentare[i].replies!, id);
      }
    }
  }

  trackById(index: number, item: KommentarModel): number {
    return item.id!; // assuming `id` is a unique identifier for each comment
  }


  assignRandomPosition(comment: KommentarModel, index: number = 0): KommentarDisplayModel {
    const x = Math.floor(Math.random() * window.innerWidth -250);
    const y = Math.floor(Math.random() * window.innerHeight -1050);

    const transformStyle = `translateX(${x}px) translateY(${y}px)`;
    const borderColor = this.generateRandomColor();



    return {
      ...comment,
      style: {
        transform: transformStyle,
        borderTop: `60px solid ${borderColor}`,
        borderRight: `60px solid ${borderColor}`,
        borderBottom: `20px solid ${borderColor}`,
        borderLeft: `20px solid ${borderColor}`,


        color: '#000000'
      }
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
      borderColor: this.generateRandomColor()
    };

    console.log('Saving comment position:', position);

    this.commentPositionService.saveCommentPosition(position).subscribe({
      next: (response) => {
        console.log('Comment position saved:', response);
      },
      error: (error) => {
        console.error('Error saving comment position:', error);
      }
    });
  }



  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
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
          y: savedPosition.yPosition
        });
        element.style.borderColor = savedPosition.borderColor || this.generateRandomColor();
      }

      Draggable.create(element, {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDrag: () => this.updatePosition(commentId, element),
        onDragEnd: () => this.updatePosition(commentId, element)
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
          y: savedPosition.yPosition
        });
      }

      Draggable.create(element, {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDrag: () => this.updateMediaPosition(fileModelId, element),
        onDragEnd: () => this.updateMediaPosition(fileModelId, element)
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
        borderColor: element.style.borderColor || this.generateRandomColor()
      };
      this.positionUpdateSubject.next(position);
    }
  }

  private updateMediaPosition(fileModelId: number, element: HTMLElement): void {
    const x = parseFloat(gsap.getProperty(element, 'x') as string);
    const y = parseFloat(gsap.getProperty(element, 'y') as string);

    if (!isNaN(x) && !isNaN(y)) {
      const position: MediaPosition = {
        fileModelId: fileModelId,
        xPosition: x,
        yPosition: y
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
      yPosition: y
    };

    this.mediaPositionService.saveMediaPosition(position).subscribe({
      next: (response) => {
        console.log('Media position saved:', response);
      },
      error: (error) => {
        console.error('Error saving media position:', error);
      }
    });
  }
  private saveCommentPosition(position: CommentPosition): void {
    this.commentPositionService.saveCommentPosition(position).subscribe({
      next: (response) => {
        console.log('Position saved:', response);
        this.commentPositions[position.kommentarId] = response;
      },
      error: (error) => console.error('Error saving position:', error)
    });
  }
  private saveMediaPosition(position: MediaPosition): void {
    this.mediaPositionService.saveMediaPosition(position).subscribe({
      next: (response) => {
        console.log('Position saved:', response);
        this.mediaPositions[position.fileModelId] = response;
      },
      error: (error) => console.error('Error saving position:', error)
    });
  }
/*   saveMediaPosition(element: ElementRef): void {
    const fileModelId = parseInt(element.nativeElement.getAttribute('data-file-id'), 10);
    const x = gsap.getProperty(element.nativeElement, 'x') as number;
    const y = gsap.getProperty(element.nativeElement, 'y') as number;

    this.mediaPositionService.saveMediaPosition({
      fileModelId,
      xPosition: x,
      yPosition: y,
    }).subscribe();
  } */
  loadPositions(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let commentPositionsLoaded = false;
      let mediaPositionsLoaded = false;

      this.commentPositionService.getCommentPositions().subscribe(positions => {
        console.log('Comment Positions:', positions); // Log the positions
        positions.forEach(pos => {
          // Ensure you are mapping all properties of CommentPosition, including kommentarId and borderColor
          this.commentPositions[pos.kommentarId] = {
            kommentarId: pos.kommentarId,  // Ensure kommentarId is included
            xPosition: pos.xPosition,
            yPosition: pos.yPosition,
            borderColor: pos.borderColor  // Include borderColor
          };
        });
        commentPositionsLoaded = true;
        if (commentPositionsLoaded && mediaPositionsLoaded) {
          resolve();
        }
      }, error => {
        console.error('Error loading comment positions:', error);
        reject();
      });

      this.mediaPositionService.getMediaPositions().subscribe(positions => {
        console.log('Media Positions:', positions); // Log the positions
        positions.forEach(pos => {
          this.mediaPositions[pos.fileModelId] = {
            fileModelId: pos.fileModelId,  // Ensure kommentarId is included
            xPosition: pos.xPosition,
            yPosition: pos.yPosition,
          };
        });
        mediaPositionsLoaded = true;
        if (commentPositionsLoaded && mediaPositionsLoaded) {
          resolve();
        }
      }, error => {
        console.error('Error loading media positions:', error);
        reject();
      });
    });
  }

}
