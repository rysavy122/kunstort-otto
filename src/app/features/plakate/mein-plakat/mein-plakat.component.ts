import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessageService } from '@app/core';
import { ToastrService } from 'ngx-toastr';



import * as paper from 'paper';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-mein-plakat',
  templateUrl: './mein-plakat.component.html',
})
export class MeinPlakatComponent implements OnInit, AfterViewInit {
  @ViewChild('drawingCanvas') drawingCanvas!: ElementRef;
  @ViewChildren('draggableElement') draggableElements!: QueryList<ElementRef>;

  public drawingTitle: string = '';
  lastDropPoint: paper.Point = new paper.Point(0, 0);


  svgPaths: string[] = [];
  stickers: paper.Raster[] = [];

/*   todo = [
    'https://rysavyotto.blob.core.windows.net/sticker/fc8d9a4e-6d63-4f7a-bfb5-c45e7229729f.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/f02555a2-0a14-46a8-85ab-9ceccc7bde3d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/e4ef5951-5596-43ad-91ed-3478b84ec627.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/df02839d-a49c-4402-b58e-87121d0b1870.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/de644bf0-d71b-4a0d-90e8-038019057b0d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/d29b2cf8-898c-4e7a-a7a5-7e5af257b181.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/cc8107b5-a9fc-4adf-883a-0aff1aab232d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/b77edec1-9d69-49f1-a6ee-8f00282a1657.webp',
  ]; */

    todo = [


    '/assets/img/1db9bbe7-6fa7-4b50-a64d-d6c0994eeeb4.webp',
    '/assets/img/3e173ed2-662d-4f6f-82b2-db4f53c06927.webp',
    '/assets/img/3eb8c855-79df-4c19-bd0c-c89a00c128b3.webp',
    '/assets/img/5e92da4d-0c5c-4de9-b4ed-6a7c4b44ff89.webp',
    '/assets/img/6b5b8295-643e-4d5d-8ccc-4316ed102247.webp',
    'assets/img/7fd7dd8c-814f-4fbd-89ba-c7e52fc03ae8.webp',
    '/assets/img/8afce092-ad0c-4920-b1d7-208aeb7c3f29.webp',
    '/assets/img/043c1d46-3368-4f13-9c25-4864e8a97475.webp',
    '/assets/img/69c43ac3-04cb-4054-9a48-11a7c05e0d6d.webp',
    '/assets/img/309e0e38-4a6e-4bfe-8b43-7f5add497376.webp',
    '/assets/img/615c53c0-9e23-4cd2-b2a7-03363a33f1df.webp',
    '/assets/img/46493c2f-8203-4e5c-b8ae-c2b40f810b0f.webp',
    '/assets/img/8201897d-46c3-4c93-8316-a591e6b43b94.webp',
    '/assets/img/81582816-bf2d-450d-abc5-de4d19a3ba37.webp',
    '/assets/img/86607939-de7b-4bc1-8d47-3cae90a20e73.webp',
    '/assets/img/a2e39570-2f5c-441a-ae54-108f64224e0b.webp',
    '/assets/img/b77edec1-9d69-49f1-a6ee-8f00282a1657.webp',
    '/assets/img/cc8107b5-a9fc-4adf-883a-0aff1aab232d.webp',
    '/assets/img/d29b2cf8-898c-4e7a-a7a5-7e5af257b181.webp',
    '/assets/img/de644bf0-d71b-4a0d-90e8-038019057b0d.webp',
    '/assets/img/df02839d-a49c-4402-b58e-87121d0b1870.webp',
    '/assets/img/e4ef5951-5596-43ad-91ed-3478b84ec627.webp',
    '/assets/img/f02555a2-0a14-46a8-85ab-9ceccc7bde3d.webp',
    '/assets/img/fc8d9a4e-6d63-4f7a-bfb5-c45e7229729f.webp',





















  ];


  done = [
    '',

  ];

  svgContent: string = '';
  originalSvgContent: string = '';
  svgHeight: string = '300px';
  svgWidth: string = '300px';


  private paperScope!: paper.PaperScope;
  private drawingPath: paper.Path | null = null;
  private isDrawing = false;
  strokeSize = 2;
  strokeColor = new paper.Color(0, 0, 0);
  isDialogOpen: boolean = false;

  stickerUrls = [
    'https://rysavyotto.blob.core.windows.net/sticker/fc8d9a4e-6d63-4f7a-bfb5-c45e7229729f.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/f02555a2-0a14-46a8-85ab-9ceccc7bde3d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/e4ef5951-5596-43ad-91ed-3478b84ec627.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/df02839d-a49c-4402-b58e-87121d0b1870.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/de644bf0-d71b-4a0d-90e8-038019057b0d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/d29b2cf8-898c-4e7a-a7a5-7e5af257b181.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/cc8107b5-a9fc-4adf-883a-0aff1aab232d.webp',
    'https://rysavyotto.blob.core.windows.net/sticker/b77edec1-9d69-49f1-a6ee-8f00282a1657.webp',
  ];
  imagesPerPage = 20;
  currentPage = 1;




  constructor(
    public messageService: MessageService,
    private toastr: ToastrService,
  ) { }
  public editorData = '<p>Initial content of the editor.</p>';


  ngOnInit(): void {
    const savedTitle = localStorage.getItem('drawingTitle');
    {
      if(savedTitle){
        this.drawingTitle = savedTitle;
      }
    }
  }
  ngAfterViewInit(): void {
    this.paperScope = new paper.PaperScope();
    this.paperScope.setup(this.drawingCanvas.nativeElement);
    this.initializeBorderImage();



    const savedDrawing = localStorage.getItem('userDrawing');
    if (savedDrawing) {
      this.paperScope.project.importJSON(savedDrawing);
    }
    this.paperScope.view.onMouseDown = (event: paper.MouseEvent) => {
      this.startDrawing(event);
    };
    this.paperScope.view.onMouseDrag = (event: paper.MouseEvent) => {
      this.draw(event);
    };
    this.paperScope.view.onMouseUp = () => {
      this.stopDrawing();
    };
  }
  handleDialogClose(success: boolean): void {
    if (success) {
      this.clearCanvas(); // Call the method to clear and reset the canvas
    }
    this.isDialogOpen = false; // Ensure the dialog can be reopened
  }


  drop(event: CdkDragDrop<string[], any>) {
    if (event.previousContainer === event.container) {
      // Move items within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Differentiate between dropping on the canvas vs. other containers
      if (event.container.id === 'canvas') {
        // Handle adding the sticker to the canvas
        const stickerUrl = event.previousContainer.data[event.previousIndex];
        this.addStickerToCanvas(stickerUrl);
      } else {
        // Handle moving items between different lists
        copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
    }
  }

  addStickerToCanvas(stickerUrl: string) {
    this.paperScope.activate(); // Make sure the correct PaperScope is active

    const sticker = new paper.Raster({
      source: stickerUrl,
      position: this.lastDropPoint // Use the last drop point for positioning
    });

    sticker.onLoad = () => {
      // Adjust the position again in case the onLoad event changes anything
      sticker.position = this.lastDropPoint;
      sticker.scale(100 / sticker.bounds.width, 100 / sticker.bounds.height); // Scale sticker to 50x50px

    };

    this.stickers.push(sticker); // Optional: Keep track of stickers
  }

  onCanvasMouseUp(event: MouseEvent) {
    // Convert mouse position to canvas coordinate system
    const bounds = this.drawingCanvas.nativeElement.getBoundingClientRect();
    this.lastDropPoint = new paper.Point(event.clientX - bounds.left, event.clientY - bounds.top);
  }


/*   get images(): string[] {
    const startIndex = (this.currentPage - 1) * this.imagesPerPage;
    return this.allImages.slice(startIndex, startIndex + this.imagesPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  } */
/*
  get totalPages(): number {
    return Math.ceil(this.allImages.length / this.imagesPerPage);
  }
 */
  initializeBorderImage(): void {
    const borderLayer = new this.paperScope.Layer();
    const borderImage = new this.paperScope.Raster({
      source: '/assets/img/OttoRahmen_freigestellt_page-0001.jpg',
      position: this.paperScope.view.center
    });

    borderImage.onLoad = () => {
      borderImage.size = new this.paperScope.Size(this.paperScope.view.viewSize.width, this.paperScope.view.viewSize.height);
      borderLayer.sendToBack();

      this.paperScope.project.activeLayer.activate();
    };
  }
  enableDrawing(): void {
    if (this.drawingPath) {
      this.drawingPath.remove();
    }

    this.drawingPath = new this.paperScope.Path({
      strokeColor: 'black',
      strokeWidth: 2,
    });

    this.paperScope.view.onMouseDrag = (event: paper.MouseEvent) => {
      if (this.drawingPath) {
        this.drawingPath.add(event.point);
      }
    };
  }

  startDrawing(event: paper.MouseEvent): void {
    this.isDrawing = true;

    this.drawingPath = new this.paperScope.Path({
      strokeColor: this.strokeColor,
      strokeWidth: this.strokeSize,
    });

    this.drawingPath.add(event.point);
  }

  clearAndResetDrawing(): void {
    if (this.drawingPath) {
      this.drawingPath.remove();
    }
    this.paperScope.project.clear();
    localStorage.removeItem('userDrawing');
    this.toastr.success('Dein Plakat ist gelöscht!');
    this.isDialogOpen = false;

  }

  draw(event: paper.MouseEvent): void {
    if (this.isDrawing && this.drawingPath) {
      this.drawingPath.add(event.point);
      this.paperScope.view.requestUpdate();
    }
  }
  stopDrawing(): void {
    this.isDrawing = false;
  }


  saveDrawing(): void {
    const drawingJSON = this.paperScope.project.exportJSON({ asString: true });
    localStorage.setItem('userDrawing', drawingJSON);
    localStorage.setItem('drawingTitle', this.drawingTitle);
    this.toastr.success('Dein Plakat wurde gespeichert!');
    console.log("Plakat gespeichert:")
  }

  exportCanvasAsImage(): void {
    this.paperScope.view.update();

    setTimeout(() => {
      const canvas = this.drawingCanvas.nativeElement;
      const imageURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');

      let filename = this.drawingTitle.trim() !== '' ? this.drawingTitle : 'Unbenannt';
      filename = filename.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '') + '.png';

      downloadLink.href = imageURL;
      downloadLink.download = filename; // Set the title as the download name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

    }, 100);
  }


  addImageSticker(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = (event: any) => {
      const file: File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const stickerImage = new this.paperScope.Raster(e.target.result);
          stickerImage.size = new this.paperScope.Size(10, 10);
          stickerImage.onMouseDown = (mouseEvent: paper.MouseEvent) => {
            this.dragSticker(stickerImage, mouseEvent);
          };
          this.stickers.push(stickerImage);
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  }
  dragSticker(stickerImage: paper.Raster, event: paper.MouseEvent): void {
    const originalPosition = stickerImage.position;
    const offset = originalPosition.subtract(event.point);

    stickerImage.onMouseDrag = (mouseEvent: paper.MouseEvent) => {
      stickerImage.position = mouseEvent.point.add(offset);
    };

    stickerImage.onMouseUp = () => {
      stickerImage.onMouseDrag = null;
    };
  }


  enableEraser(): void {
    if (this.stickers.length > 0) {
      const lastSticker = this.stickers.pop(); // Remove the last sticker from the array
      lastSticker!.remove(); // Remove the last sticker from the canvas
      return; // Exit the method to avoid undoing the last draw in this action
    }
    if (this.drawingPath) {
      this.drawingPath.remove();
      this.drawingPath = null;
      this.isDrawing = false;
    }
  }

  clearCanvas(): void {

    if (this.drawingPath) {
      this.drawingPath.remove();
      this.drawingPath = null;
    }

    this.paperScope.project.clear();
    localStorage.removeItem('userDrawing');
    localStorage.removeItem('drawingTitle');
    this.drawingTitle = '';
    this.initializeBorderImage();

    this.toastr.success('Neues Plakat bereit!');

  }
  initializeDrawing(): void {
    this.enableDrawing();
  }
  openDialog(){
    this.isDialogOpen = true;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.originalSvgContent = e.target.result;
        this.svgContent = e.target.result;
        this.parseSVG(this.svgContent);
      };
      reader.readAsText(file);
    }
  }
  revertToOriginal(): void {
    this.svgContent = this.originalSvgContent;
    this.parseSVG(this.svgContent);
  }

  parseSVG(svgContent: string): void {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const paths = svgDoc.querySelectorAll('path');
    this.svgPaths = [];
    paths.forEach((path) => {
      this.svgPaths.push(path.getAttribute('d') || '');
    });
    console.log("Svg Pfade", paths);
  }
  rearrangePaths(): void {
    if (!this.svgContent) return;

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(this.svgContent, "image/svg+xml");
    const svgElement = svgDoc.querySelector('svg');

    if (!svgElement) return;

    const containerWidth = parseInt(this.svgWidth, 10);
    const containerHeight = parseInt(this.svgHeight, 10);

    const paths = Array.from(svgElement.querySelectorAll('path'));

    paths.forEach(path => {
      let d = path.getAttribute('d') || '';

      d = d.replace(/([0-9]+\.?[0-9]*)/g, (match, offset, string) => {
        const num = parseFloat(match);
        let randomAdjustment = (Math.random() * 200 - 10);
        if (offset % 2 === 0) {
          return Math.min(Math.max(num + randomAdjustment, 10), containerWidth).toFixed(2);
        } else {
          return Math.min(Math.max(num + randomAdjustment, 10), containerHeight).toFixed(2);
        }
      });

      path.setAttribute('d', d);
    });

    const serializer = new XMLSerializer();
    this.svgContent = serializer.serializeToString(svgDoc);
  }


  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  changeStrokeColor(): void {
    if (this.drawingPath) {
      this.drawingPath.strokeColor = this.strokeColor;
    }
  }
}
