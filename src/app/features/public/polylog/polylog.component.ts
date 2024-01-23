import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { KommentarService } from 'src/app/core/services/kommentar.service';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { KommentarModel, KommentarDisplayModel } from 'src/app/core/models/kommentar.model';
import { CommentDialogComponent } from 'src/app/shared/components/dialog/comment-dialog.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);


@Component({
  selector: 'app-polylog',
  templateUrl: './polylog.component.html',
})
export class PolylogComponent implements OnInit, AfterViewInit {
  forschungsfrage?: string = '';
  isMenuOpen: boolean = false;
  activeCommentId: number | null = null;
  kommentare: KommentarDisplayModel[] = [];
  private resizeTimeout?: number;
  errorMessage: string = 'Fehler beim laden der Forschungsfrage.';
  isDialogOpen: boolean = false;
  @ViewChild('commentDialog') commentDialog!: CommentDialogComponent;
  @ViewChildren('draggableElement') draggableElements!: QueryList<ElementRef>;




  constructor(private forschungsfrageService: ForschungsFrageService,
    private sanitizer: DomSanitizer,
    private kommentarService: KommentarService) { }


  // Initialize things

  ngOnInit(): void {
    this.fetchLatestForschungsfrage();
    this.listenForNewForschungsfrage();
    this.loadKommentare();
  }

  ngAfterViewInit(): void {
    this.initializeDraggable();
  }
  initializeDraggable(): void {
    this.draggableElements.forEach((element) => {
      Draggable.create(element.nativeElement, {
        type: "x,y",
        bounds: window,
        inertia: true,
      });
    });
  }
  editKommentar(commentId: number): void {
    // Logic to handle editing a comment
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

// Handle Forschungsfrage

  fetchLatestForschungsfrage() {
    this.forschungsfrageService.getLatestForschungsfrage().subscribe({
      next: (forschungsfrage: ForschungsfragenModel) => {
        this.forschungsfrage = forschungsfrage.title;
      },
      error: () => {
        this.forschungsfrage = this.errorMessage;
      }
    });
  }


  listenForNewForschungsfrage() {
    this.forschungsfrageService.forschungsfragen$.subscribe(() => {
      this.fetchLatestForschungsfrage();
    });
  }


  // Handle Kommentare

  getSafeHtml(content: string | undefined): SafeHtml | string {
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
  }
  /* onCommentSubmitted(newKommentar: KommentarModel): void {
    if (!newKommentar) return;
  
    const kommentarWithPosition = this.assignRandomPosition(newKommentar);
  
    if (newKommentar.parentKommentarId == null) {
      // Adding a top-level comment
      this.kommentare.push(this.assignRandomPosition(newKommentar));
    } else {
      // Adding a reply, possibly nested
      this.addReplyToKommentar(this.kommentare, newKommentar);
    }
  
    this.loadKommentare();
  } */
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
  
  

  // Positioning the Comments

  updateCommentPositions(): void {
    this.kommentare = this.kommentare.map((kommentar) =>
      this.assignRandomPosition(kommentar)
    );
  }

  assignRandomPosition(comment: KommentarModel, index: number = 0): KommentarDisplayModel {
    const x = Math.floor(Math.random() * window.innerWidth );
    const y = Math.floor(Math.random() * window.innerHeight );
  
    const transformStyle = `translateX(${x}px) translateY(${y}px)`;

  
    return {
      ...comment,
      style: {
        transform: transformStyle,
        backgroundColor: this.generateRandomColor(), 
        color: '#000000' 
      }
    };
  }

    /*
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = window.setTimeout(() => {
      this.kommentare = this.kommentare.map((kommentar, index) => this.assignRandomPosition(kommentar, index));
    }, 100);
  }
   */









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

  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
