import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { KommentarModel, KommentarDisplayModel } from 'src/app/core/models/kommentar.model';
import { CommentDialogComponent } from 'src/app/shared/components/dialog/comment-dialog.component';
import { KommentarService } from 'src/app/core/services/kommentar.service';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit, AfterViewInit {
    @Input() comment!: KommentarModel;
    isMenuOpen: boolean = false;
    activeCommentId: number | null = null;
    kommentare: KommentarDisplayModel[] = [];
    private resizeTimeout?: number;
    errorMessage = 'Fehler beim laden der Forschungsfrage.';
    isDialogOpen: boolean = false;
    @ViewChild('commentDialog') commentDialog!: CommentDialogComponent;
    @ViewChildren('draggableElement') draggableElements!: QueryList<ElementRef>;

    constructor(
        private sanitizer: DomSanitizer,
        private kommentarService: KommentarService) {
 }
 ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initializeDraggable();
  }
  loadKommentare(): void {
    this.kommentarService.getAllKommentare().subscribe(kommentare => {
      this.kommentare = kommentare.map((k: KommentarModel) => this.assignRandomPosition(k));
      setTimeout(() => this.initializeDraggable(), 0);
    });
  }

  assignRandomPosition(comment: KommentarModel, index: number = 0): KommentarDisplayModel {
    const x = Math.floor(Math.random() * window.innerWidth -250);
    const y = Math.floor(Math.random() * window.innerHeight -1050);
  
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

  initializeDraggable(): void {
    this.draggableElements.forEach((element) => {
      Draggable.create(element.nativeElement, {
        type: "x,y",
        bounds: window,
        inertia: true,
      });
    });
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



    getSafeHtml(content: string | undefined): SafeHtml | string {
        return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
    }

    toggleMenu(commentId: number): void {
        this.isMenuOpen = this.activeCommentId !== commentId || !this.isMenuOpen;
        this.activeCommentId = commentId;
    }
    editKommentar(commentId: number): void {
        // Logic to handle editing a comment
    }

    openDialog(parentId: number | null = null) {
        this.isDialogOpen = true;
        this.commentDialog.parentKommentarId = parentId;
    }
    openReplyDialog(parentId: number) {
        this.openDialog(parentId);
        this.isMenuOpen = false;

    }
    trackById(index: number, item: KommentarModel): number {
        return item.id!; // assuming `id` is a unique identifier for each comment
    }


    closeDialog() {
        this.isDialogOpen = false;
    }
    deleteKommentar(id: number): void {
        this.kommentarService.deleteKommentar(id).subscribe(() => {
            // Update the state of the comments and replies
            this.kommentare.forEach((kommentar, index) => {
                if (kommentar.id === id) {
                    // Delete the top-level comment
                    this.kommentare.splice(index, 1);
                } else {
                    // Check and delete the reply if it matches the id
                    kommentar.replies = kommentar.replies!.filter(reply => reply.id !== id);
                }
            });
        });
    }
}