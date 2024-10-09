import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MessageService, PlakatService } from '@app/core';
import { ToastrService } from 'ngx-toastr';

import * as paper from 'paper';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Plakat } from 'src/app/core/models/plakat.model';

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
  availableStickers: string[] = [
    '/assets/img/sticker/1db9bbe7-6fa7-4b50-a64d-d6c0994eeeb4.webp',
    '/assets/img/sticker/3e173ed2-662d-4f6f-82b2-db4f53c06927.webp',
    '/assets/img/sticker/3eb8c855-79df-4c19-bd0c-c89a00c128b3.webp',
    '/assets/img/sticker/5e92da4d-0c5c-4de9-b4ed-6a7c4b44ff89.webp',
    '/assets/img/sticker/6b5b8295-643e-4d5d-8ccc-4316ed102247.webp',
    '/assets/img/sticker/7fd7dd8c-814f-4fbd-89ba-c7e52fc03ae8.webp',
    '/assets/img/sticker/8afce092-ad0c-4920-b1d7-208aeb7c3f29.webp',
    '/assets/img/sticker/043c1d46-3368-4f13-9c25-4864e8a97475.webp',
    '/assets/img/sticker/69c43ac3-04cb-4054-9a48-11a7c05e0d6d.webp',
    '/assets/img/sticker/309e0e38-4a6e-4bfe-8b43-7f5add497376.webp',
    '/assets/img/sticker/615c53c0-9e23-4cd2-b2a7-03363a33f1df.webp',
    '/assets/img/sticker/46493c2f-8203-4e5c-b8ae-c2b40f810b0f.webp',
    '/assets/img/sticker/8201897d-46c3-4c93-8316-a591e6b43b94.webp',
    '/assets/img/sticker/81582816-bf2d-450d-abc5-de4d19a3ba37.webp',
    '/assets/img/sticker/86607939-de7b-4bc1-8d47-3cae90a20e73.webp',
    '/assets/img/sticker/a2e39570-2f5c-441a-ae54-108f64224e0b.webp',
    '/assets/img/sticker/b77edec1-9d69-49f1-a6ee-8f00282a1657.webp',
    '/assets/img/sticker/cc8107b5-a9fc-4adf-883a-0aff1aab232d.webp',
    '/assets/img/sticker/d29b2cf8-898c-4e7a-a7a5-7e5af257b181.webp',
    '/assets/img/sticker/de644bf0-d71b-4a0d-90e8-038019057b0d.webp',
    '/assets/img/sticker/df02839d-a49c-4402-b58e-87121d0b1870.webp',
    '/assets/img/sticker/e4ef5951-5596-43ad-91ed-3478b84ec627.webp',
    '/assets/img/sticker/f02555a2-0a14-46a8-85ab-9ceccc7bde3d.webp',
    '/assets/img/sticker/fc8d9a4e-6d63-4f7a-bfb5-c45e7229729f.webp',
  ];

  private frameSources: { [key: string]: { postcard?: string; poster: string } } = {
    Königsblau: {
      postcard: '/assets/img/postcard/Postkarten_frei_7.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_1.png',
    },
    Violette: {
      postcard: '/assets/img/postcard/Postkarten_frei_11.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_2.png',
    },
    Rot: {
      postcard: '/assets/img/postcard/Postkarten_frei_5.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_3.png',
    },
    Turquise: {
      postcard: '/assets/img/postcard/Postkarten_frei_1.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_4.png',
    },
    Lila: {
      postcard: '/assets/img/postcard/Postkarten_frei_6.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_5.png',
    },
    Pink: {
      postcard: '/assets/img/postcard/Postkarten_frei_3.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_6.png',
    },
    Gelb: {
      postcard: '/assets/img/postcard/Postkarten_frei_8.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_7.png',
    },
    Rosa: {
      postcard: '/assets/img/postcard/Postkarten_frei_2.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_8.png',
    },
    Minze: {
      postcard: '/assets/img/postcard/Postkarten_frei_9.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_9.png',
    },
    Babyblau: {
      postcard: '/assets/img/postcard/Postkarten_frei_4.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_10.png',
    },
    Orange: {
      postcard: '/assets/img/postcard/Postkarten_frei_12.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_11.png',
    },
    Grün: {
      postcard: '/assets/img/postcard/Postkarten_frei_10.png',
      poster: '/assets/img/poster/OttoRahmen_bunt_12.png',
    },
  };

  canvasStickers = [''];

  svgContent: string = '';
  originalSvgContent: string = '';
  svgHeight: string = '';
  svgWidth: string = '';
  private paperScope!: paper.PaperScope;
  private drawingPath: paper.Path | null = null;
  private isDrawing: boolean = false;
  private isDraggingSticker: boolean = false; // Add this to your component

  isDialogOpen: boolean = false;

  isPostcard: boolean = false;
  isPoster: boolean = true;

  plakat: Plakat = {
    id: 0,
    title: '',
    drawingJson: '',
    stickers: [],
  };

  strokeSize = 2;
  strokeColor = new paper.Color(0, 0, 0);
  imagesPerPage = 8;
  currentPage = 1;
  totalPages: number = 3;

  drawingColor: string = 'black';
  private backgroundLayer!: paper.Layer;
  private drawingLayer!: paper.Layer;
  private frameLayer!: paper.Layer;
  public logoFileName: string = '';
  private postcardSize = { width: 1225 / 1.5, height: 874 / 1.5 };
  private posterSize = { width: 874 / 1.5, height: 1225 / 1.5 };

  private postCardSource: string = '/assets/img/postcard/Postkarten_frei_4.png';
  public posterSource: string = this.frameSources['Königsblau'].poster;


  constructor(
    public messageService: MessageService,
    private plakatService: PlakatService,
    private toastr: ToastrService
  ) {}
  public editorData = '<p>Initial content of the editor.</p>';

  ngOnInit(): void {
    // Load saved frame color and background color from localStorage
    const savedFrameColor = localStorage.getItem('selectedFrameColor');
    const savedBackgroundColor = localStorage.getItem('selectedBackgroundColor');

    // If there are saved colors, use them
    if (savedFrameColor && this.frameSources[savedFrameColor]) {
      this.posterSource = this.frameSources[savedFrameColor].poster;
      this.postCardSource = this.frameSources[savedFrameColor].postcard || this.postCardSource;
    }

    if (savedBackgroundColor) {
      this.setBackground(savedBackgroundColor);
    }

    // Proceed with the rest of the initialization
    this.backgroundLayer = new this.paperScope.Layer();
    const backgroundRect = new this.paperScope.Path.Rectangle({
      point: [0, 0],
      size: [
        this.paperScope.view.viewSize.width,
        this.paperScope.view.viewSize.height,
      ],
      fillColor: 'white',
    });

    this.drawingLayer = new this.paperScope.Layer();
    this.frameLayer = new this.paperScope.Layer();

    const initialSource = this.isPostcard ? this.postCardSource : this.posterSource;
    const borderImage = new this.paperScope.Raster({
      source: initialSource,
      position: this.paperScope.view.center,
    });

    const savedTitle = localStorage.getItem('drawingTitle');
    if (savedTitle) {
      this.drawingTitle = savedTitle;
    }

    const scaleFactor = window.devicePixelRatio || 1;
    this.paperScope.view.viewSize = new this.paperScope.Size(
      this.paperScope.view.viewSize.width * scaleFactor,
      this.paperScope.view.viewSize.height * scaleFactor
    );
  }

  ngAfterViewInit(): void {
    this.paperScope = new paper.PaperScope();
    this.paperScope.setup(this.drawingCanvas.nativeElement);
    this.initializeLayers();

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
  handleDialogClose(event: { success: boolean, color: string, backgroundColor: string }): void {
    if (event.success) {
      const selectedColor = event.color;
      const selectedBackgroundColor = event.backgroundColor;

      // Update both the posterSource and postCardSource based on the selected color
      this.posterSource = this.frameSources[selectedColor].poster;
      this.postCardSource = this.frameSources[selectedColor].postcard || this.postCardSource;

      // Set the background color
      this.setBackground(selectedBackgroundColor);

      // Save the selected colors in localStorage
      localStorage.setItem('selectedFrameColor', selectedColor);
      localStorage.setItem('selectedBackgroundColor', selectedBackgroundColor);

      this.clearCanvas(); // Reset the canvas and apply the new frame
    }
    this.isDialogOpen = false;
  }
  setBackground(color: string) {
    const backgroundColor = this.mapColorNameToHex(color); // Optionally map color names to hex codes

    // Save the background color in localStorage
    localStorage.setItem('selectedBackgroundColor', color);

    // Clear the previous background
    this.backgroundLayer.removeChildren();

    // Ensure the background fills the entire postcard or poster size
    const size = this.isPostcard ? this.postcardSize : this.posterSize;

    // Create a new rectangle with the background color
    const backgroundRect = new this.paperScope.Path.Rectangle({
      point: [0, 0],
      size: [size.width, size.height], // Ensure it fully covers the canvas
      fillColor: backgroundColor,
    });

    this.backgroundLayer.addChild(backgroundRect);
    this.backgroundLayer.sendToBack();
  }
  // Optional helper to map color names to hex codes
mapColorNameToHex(color: string): string {
  const colorMap: { [key: string]: string } = {
    'Weiß': '#FFFFFF',
    'Grau': '#808080',
    'Schwarz': '#000000',
    'Blau': '#0000FF',
    'Rot': '#FF0000',
    'Grün': '#008000',
    'Gelb': '#FFFF00',
    'Rosa': '#FFC0CB',
  };
  return colorMap[color] || '#FFFFFF'; // Default to white
}
  savePlakat(): void {
    this.plakatService.createPlakat(this.plakat).subscribe((response) => {
      console.log('Plakat created:', response);
    });
  }

  addStickerToPlakat(stickerUrl: string): void {
    const sticker = {
      id: 0,
      fileName: '',
      fileType: '',
      blobStorageUri: stickerUrl,
      plakatId: this.plakat.id,
    };
    this.plakatService.addSticker(this.plakat.id, sticker).subscribe(() => {
      console.log('Sticker added to plakat');
    });
  }

  drop(event: CdkDragDrop<string[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.container.id === 'canvas') {
        const stickerUrl = event.previousContainer.data[event.previousIndex];
        this.addStickerToCanvas(stickerUrl);
      } else {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }

  addStickerToCanvas(stickerUrl: string) {
    this.paperScope.activate();
    const sticker = new paper.Raster({
      source: stickerUrl,
      position: this.lastDropPoint,
    });

    sticker.onLoad = () => {
      sticker.position = this.lastDropPoint;
      sticker.scale(100 / sticker.bounds.width, 100 / sticker.bounds.height);
    };

    this.stickers.push(sticker);
  }

  onCanvasMouseUp(event: MouseEvent) {
    const bounds = this.drawingCanvas.nativeElement.getBoundingClientRect();
    this.lastDropPoint = new paper.Point(
      event.clientX - bounds.left,
      event.clientY - bounds.top
    );
  }

  get currentImages(): string[] {
    const start = (this.currentPage - 1) * this.imagesPerPage;
    const end = start + this.imagesPerPage;
    return this.availableStickers.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  initializeLayers(): void {
  this.backgroundLayer = new this.paperScope.Layer();

  // Get the background color from localStorage or default to white
  const savedBackgroundColor = localStorage.getItem('selectedBackgroundColor') || 'white';
  const backgroundColor = this.mapColorNameToHex(savedBackgroundColor);

  // Choose the correct size for postcard or poster
  const initialSize = this.isPostcard ? this.postcardSize : this.posterSize;

  // Ensure the view size is set correctly
  this.paperScope.view.viewSize = new this.paperScope.Size(initialSize.width, initialSize.height);

  // Create the background rectangle to match the size of the postcard/poster and fill the entire canvas
  const backgroundRect = new this.paperScope.Path.Rectangle({
    point: [0, 0],
    size: [initialSize.width, initialSize.height], // No extra width added, exact postcard size
    fillColor: backgroundColor, // Apply the selected background color
  });

  this.backgroundLayer.addChild(backgroundRect);
  this.backgroundLayer.sendToBack();

  this.drawingLayer = new this.paperScope.Layer();
  this.frameLayer = new this.paperScope.Layer();

  const initialSource = this.isPostcard ? this.postCardSource : this.posterSource;
  const initialFrame = new this.paperScope.Raster({
    source: initialSource,
    position: this.paperScope.view.center,
  });

  initialFrame.onLoad = () => {
    initialFrame.size = new this.paperScope.Size(initialSize.width, initialSize.height); // Frame matches the size
    this.frameLayer.addChild(initialFrame);
    this.paperScope.project.activeLayer.activate();
  };
}


  bringFrameLayerToFront(): void {
    this.frameLayer.bringToFront();
    this.paperScope.view.update();
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
    if (this.isDraggingSticker) {
      return;
    }

    this.isDrawing = true;

    if (this.isInsideDrawingArea(event.point)) {
      this.drawingPath = new this.paperScope.Path({
        strokeColor: this.strokeColor,
        strokeWidth: this.strokeSize,
      });

      this.drawingPath.add(event.point);
    }
  }

  draw(event: paper.MouseEvent): void {
    if (this.isDraggingSticker || !this.isDrawing || !this.drawingPath) {
      return;
    }

    if (this.isInsideDrawingArea(event.point)) {
      this.drawingPath.add(event.point);
      this.paperScope.view.requestUpdate();
    }
  }

  switchFormat() {
    this.isPostcard = !this.isPostcard;
    this.isPoster = !this.isPoster;
    this.frameLayer.removeChildren();

    const newSize = this.isPostcard ? this.postcardSize : this.posterSize;
    const newSource = this.isPostcard ? this.postCardSource : this.posterSource;

    this.paperScope.view.viewSize = new this.paperScope.Size(newSize.width, newSize.height);

    const newFrame = new this.paperScope.Raster({
      source: newSource,
      position: this.paperScope.view.center,
    });

    newFrame.onLoad = () => {
      newFrame.size = new this.paperScope.Size(newSize.width, newSize.height); // Ensure the frame matches the new size
      this.frameLayer.addChild(newFrame);
      this.paperScope.project.activeLayer.activate();
      this.paperScope.view.update();
    };
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }

  isInsideDrawingArea(point: paper.Point): boolean {
    const drawingArea = new this.paperScope.Path.Rectangle({
      from: new this.paperScope.Point(50, 50),
      to: new this.paperScope.Point(
        this.paperScope.view.viewSize.width - 50,
        this.paperScope.view.viewSize.height - 50
      ),
      strokeWidth: 0,
    });
    return drawingArea.contains(point);
  }

  saveDrawing(): void {
    const drawingJSON = this.paperScope.project.exportJSON({ asString: true });
    localStorage.setItem('userDrawing', drawingJSON);
    localStorage.setItem('drawingTitle', this.drawingTitle);
    this.toastr.success('Dein Plakat wurde gespeichert!');
    console.log('Plakat gespeichert:');
  }

  exportCanvasAsImage(): void {
    this.addFrameToTopLayer();
    this.paperScope.view.update();

    setTimeout(() => {
      const canvas = this.drawingCanvas.nativeElement;
      const imageURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');

      let filename =
        this.drawingTitle.trim() !== '' ? this.drawingTitle : 'Unbenannt';
      filename =
        filename.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '') + '.png';

      downloadLink.href = imageURL;
      downloadLink.download = filename;
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

          stickerImage.onLoad = () => {
            const desiredWidth = 100;
            const desiredHeight = 100;

            const widthScale = desiredWidth / stickerImage.width;
            const heightScale = desiredHeight / stickerImage.height;

            stickerImage.scale(widthScale, heightScale);
            stickerImage.position = this.paperScope.view.center;
          };

          this.stickers.push(stickerImage);
          this.dragSticker(stickerImage, event);
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  }

  dragSticker(stickerImage: paper.Raster, event: paper.MouseEvent): void {
    const originalPosition = stickerImage.position;
    const offset = originalPosition.subtract(event.point);

    this.isDraggingSticker = true;

    stickerImage.onMouseDrag = (mouseEvent: paper.MouseEvent) => {
      stickerImage.position = mouseEvent.point.add(offset);
    };

    stickerImage.onMouseUp = () => {
      this.isDraggingSticker = false;
      stickerImage.onMouseDrag = null;
    };
  }

  enableEraser(): void {
    if (this.stickers.length > 0) {
      const lastSticker = this.stickers.pop();
      lastSticker!.remove();
      return;
    }
    if (this.drawingPath) {
      this.drawingPath.remove();
      this.drawingPath = null;
      this.isDrawing = false;
    }
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

  clearCanvas(): void {
    if (this.drawingPath) {
      this.drawingPath.remove();
      this.drawingPath = null;
    }

    this.paperScope.project.clear();
    localStorage.removeItem('userDrawing');
    localStorage.removeItem('drawingTitle');
    this.drawingTitle = '';
    this.initializeLayers();

    this.toastr.success('Neues Plakat bereit!');
  }

  initializeDrawing(): void {
    this.enableDrawing();
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.originalSvgContent = e.target.result;
        this.svgContent = e.target.result;
        this.parseSVG(this.svgContent);
      };
      reader.readAsText(file);
    }
  }

  onLogoFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
      this.logoFileName = file.name.split('.').slice(0, -1).join('.');

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.originalSvgContent = e.target.result;
        this.svgContent = e.target.result;

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(this.svgContent, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');

        if (svgElement) {
          const width = svgElement.getAttribute('width');
          const height = svgElement.getAttribute('height');

          this.svgWidth = width || '500px';
          this.svgHeight = height || '500px';

          const logoCanvas = document.getElementById(
            'logoCanvas'
          ) as HTMLCanvasElement;
          logoCanvas.width = parseInt(this.svgWidth, 10);
          logoCanvas.height = parseInt(this.svgHeight, 10);
        }

        this.parseSVG(this.svgContent);
      };
      reader.readAsText(file);
    }
  }

  downloadLogoAsPNG(): void {
    const logoCanvas = document.getElementById(
      'logoCanvas'
    ) as HTMLCanvasElement;
    const ctx = logoCanvas.getContext('2d');

    const img = new Image();
    const svgBlob = new Blob([this.svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      logoCanvas.width = img.width;
      logoCanvas.height = img.height;

      ctx!.clearRect(0, 0, logoCanvas.width, logoCanvas.height);
      ctx!.drawImage(img, 0, 0, img.width, img.height);

      const imageURL = logoCanvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');

      let filename = this.logoFileName
        ? `${this.logoFileName}_otto`
        : 'Unbenannt_otto';
      filename =
        filename.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '') + '.png';

      downloadLink.href = imageURL;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(url);
    };

    img.src = url;
  }

  downloadSVG(): void {
    const svgBlob = new Blob([this.svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement('a');
    let filename =
      this.drawingTitle.trim() !== '' ? this.drawingTitle : 'Unbenannt';
    filename =
      filename.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '') + '.svg';

    downloadLink.href = url;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(url);
  }

  revertToOriginal(): void {
    this.svgContent = this.originalSvgContent;
    this.parseSVG(this.svgContent);
  }

  parseSVG(svgContent: string): void {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const paths = svgDoc.querySelectorAll('path');
    this.svgPaths = [];
    paths.forEach((path) => {
      this.svgPaths.push(path.getAttribute('d') || '');
    });
    console.log('Svg Pfade', paths);
  }

  rearrangePaths(): void {
    if (!this.svgContent) return;

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(this.svgContent, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');

    if (!svgElement) return;

    const containerWidth = parseInt(this.svgWidth, 10);
    const containerHeight = parseInt(this.svgHeight, 10);

    const paths = Array.from(svgElement.querySelectorAll('path'));

    paths.forEach((path) => {
      let d = path.getAttribute('d') || '';

      d = d.replace(/([0-9]+\.?[0-9]*)/g, (match, offset, string) => {
        const num = parseFloat(match);
        let randomAdjustment = Math.random() * 200 - 10;
        if (offset % 2 === 0) {
          return Math.min(
            Math.max(num + randomAdjustment, 10),
            containerWidth
          ).toFixed(2);
        } else {
          return Math.min(
            Math.max(num + randomAdjustment, 10),
            containerHeight
          ).toFixed(2);
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

  private addFrameToTopLayer(): void {
    const borderImage = new this.paperScope.Raster({
      source: this.isPostcard ? this.postCardSource : this.posterSource,
      position: this.paperScope.view.center,
    });

    borderImage.onLoad = () => {
      borderImage.size = new this.paperScope.Size(
        this.paperScope.view.viewSize.width,
        this.paperScope.view.viewSize.height
      );
      borderImage.bringToFront();
    };
  }
}
