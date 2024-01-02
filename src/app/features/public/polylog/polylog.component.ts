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
  forschungsfrage? = '';
  kommentare: KommentarDisplayModel[] = [];
  private resizeTimeout?: number;
  errorMessage = 'Fehler beim laden der Forschungsfrage.';
  isDialogOpen: boolean = false;
  @ViewChild('confirmDialog') commentDialog!: CommentDialogComponent;
  @ViewChildren('draggableElement') draggableElements!: QueryList<ElementRef>;



  constructor(private forschungsfrageService: ForschungsFrageService,
    private sanitizer: DomSanitizer,
    private kommentarService: KommentarService) { }


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


/*   @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = window.setTimeout(() => {
      this.kommentare = this.kommentare.map((kommentar, index) => this.assignRandomPosition(kommentar, index));
    }, 100);
  }
   */



  updateCommentPositions(): void {
    this.kommentare = this.kommentare.map((kommentar) =>
      this.assignRandomPosition(kommentar)
    );
  }
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
  getSafeHtml(content: string | undefined): SafeHtml | string {
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
  }
  onCommentSubmitted(newKommentar: KommentarModel): void {
    const kommentarWithPosition = this.assignRandomPosition(newKommentar);
    this.kommentare.push(kommentarWithPosition);
    this.loadKommentare();
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

  listenForNewForschungsfrage() {
    this.forschungsfrageService.forschungsfragen$.subscribe(() => {
      this.fetchLatestForschungsfrage();
    });
  }
  openDialog() {
    this.isDialogOpen = true;
  }
  closeDialog() {
    this.isDialogOpen = false;
  }

  generateRandomColor(): string {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const part = Math.floor(Math.random() * 256).toString(16);
      color += part.padStart(2, '0');
    }

    if (this.isColorUnacceptable(color)) {
      return this.generateRandomColor(); // Recursively generate a new color
    }
    return color;
  }

  isColorUnacceptable(color: string): boolean {
    // Add conditions for unacceptable colors
    const unacceptableColors = ['#000000', '#ffffff', '#e21c52']; // Black, White, Otto primary
    const colorDistanceThreshold = 50; // Adjust this threshold as needed

    for (let unacceptable of unacceptableColors) {
      if (this.getColorDistance(color, unacceptable) < colorDistanceThreshold) {
        return true;
      }
    }
    return false;
  }

  getColorDistance(color1: string, color2: string): number {
    // Convert hex color to RGB
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    if (!rgb1 || !rgb2) return 0;

    // Calculate distance
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
