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
  private startPosition?: { x: number, y: number };
  kommentare: KommentarDisplayModel[] = [];
  private isDragging = false;
  private dragComment?: KommentarDisplayModel;
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
        // Other settings...
      });
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = window.setTimeout(() => {
      this.kommentare = this.kommentare.map((kommentar, index) => this.assignRandomPosition(kommentar, index));
    }, 100);
  }
  



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
      // Initialize Draggable after comments are loaded and rendered
      setTimeout(() => this.initializeDraggable(), 0);
    });
  }
  assignRandomPosition(comment: KommentarModel, index: number = 0): KommentarDisplayModel {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
  
    const transformStyle = `translateX(${x}px) translateY(${y}px)`;
  
    const transitionDuration = '1s';
    const transitionDelay = `${0.8 * index}s`; 

  
    return {
      ...comment,
      style: {
        position: 'absolute',
        transform: transformStyle,
        transition: `transform ${transitionDuration} ease-in-out ${transitionDelay}`
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

}
