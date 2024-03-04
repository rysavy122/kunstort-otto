import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '@app/core';
import { ToastrService } from 'ngx-toastr';

import * as paper from 'paper';
@Component({
  selector: 'app-mein-plakat',
  templateUrl: './mein-plakat.component.html',
})
export class MeinPlakatComponent implements OnInit, AfterViewInit {
  svgPaths: string[] = [];
  stickers: paper.Raster[] = [];
  svgContent: string = '';
  originalSvgContent: string = '';
  svgHeight: string = '300px';
  svgWidth: string = '300px';
  @ViewChild('drawingCanvas') drawingCanvas!: ElementRef;
  private paperScope!: paper.PaperScope;
  private drawingPath: paper.Path | null = null;
  private isDrawing = false;
  strokeSize = 2;
  strokeColor = new paper.Color(0, 0, 0);




  constructor(
    public messageService: MessageService,
    private toastr: ToastrService,
  ) { }
  public editorData = '<p>Initial content of the editor.</p>';


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.paperScope = new paper.PaperScope();
    this.paperScope.setup(this.drawingCanvas.nativeElement);

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
    this.toastr.success('Dein Plakat wurde gespeichert!');
    console.log("Plakat gespeichert:")
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
          stickerImage.size = new this.paperScope.Size(10, 10); // Set sticker size
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
    if (this.drawingPath) {
      this.drawingPath.remove();
    }
    this.drawingPath = null;
    this.isDrawing = false;
  }

  clearCanvas(): void {
    if (this.drawingPath) {
      this.drawingPath.remove();
      localStorage.removeItem('userDrawing');
    }
    this.paperScope.project.clear();
    localStorage.removeItem('userDrawing');

  }
  initializeDrawing(): void {
    this.enableDrawing();
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
