import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MessageService, PlakatService, RoleService } from '@app/core';
import { ToastrService } from 'ngx-toastr';

import * as paper from 'paper';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Plakat } from 'src/app/core/models/plakat.model';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-mein-plakat',
  templateUrl: './mein-plakat.component.html',
})
export class MeinPlakatComponent implements OnInit, AfterViewInit {
  @ViewChild('drawingCanvas') drawingCanvas!: ElementRef;
  @ViewChildren('draggableElement') draggableElements!: QueryList<ElementRef>;

  public drawingTitle: string = '';
  isCanvasReady: boolean = false;
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

  private frameSources: {
    [key: string]: { postcard?: string; poster: string };
  } = {
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
  role: string | null = null;
  hasPostCardAccess: boolean = false;

  private paperScope!: paper.PaperScope;
  private drawingPath: paper.Path | null = null;
  private isDrawing: boolean = false;
  private isDraggingSticker: boolean = false; // Add this to your component
  private isUndoRedoAction: boolean = false; // Add this flag
  private isActionInProgress = false; // Add this flag to control undo/redo


  stateHistory: string[] = [];
  currentStateIndex: number = 0;
  maxHistoryStates: number = 50;

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
  eraserSize = 2;
  strokeColor = new paper.Color(0, 0, 0);
  public strokeHexColor: string = '#000000'; // Default to black

  imagesPerPage = 6;
  currentPage = 1;
  totalPages: number = 4;

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
    private roleService: RoleService,
    private toastr: ToastrService
  ) {}
  public editorData = '<p>Initial content of the editor.</p>';

  ngOnInit(): void {
    // Load saved frame color and background color from localStorage
    const savedFrameColor = localStorage.getItem('selectedFrameColor');
    const savedBackgroundColor = localStorage.getItem(
      'selectedBackgroundColor'
    );

    // If there are saved colors, use them
    if (savedFrameColor && this.frameSources[savedFrameColor]) {
      this.posterSource = this.frameSources[savedFrameColor].poster;
      this.postCardSource =
        this.frameSources[savedFrameColor].postcard || this.postCardSource;
    }

    if (savedBackgroundColor) {
      this.setBackground(savedBackgroundColor);
    }
    this.role = this.roleService.getRole();

    if (this.role === 'Team' || this.role === 'Künstler') {
      this.hasPostCardAccess = true;
    }

    const savedTitle = localStorage.getItem('drawingTitle');
    if (savedTitle) {
      this.drawingTitle = savedTitle;
    }
    const savedHistory = localStorage.getItem('drawingStateHistory');
    if (savedHistory) {
      this.stateHistory = JSON.parse(savedHistory);
      this.currentStateIndex = this.stateHistory.length - 1;
    }
  }

  ngAfterViewInit(): void {
    this.initializePaperCanvas();
    this.initializeDrawing(); // Ensure this is called here

    this.backgroundLayer = new this.paperScope.Layer();

    // Adding a delay before saving the state
    setTimeout(() => {
      this.saveState();  // Call saveState after the delay
      console.log('Initial state saved after delay');
    }, 100); // Adjust the delay time (in milliseconds) as needed, e.g., 500ms
  }
  initializePaperCanvas(): void {
    this.paperScope = new paper.PaperScope();
    this.paperScope.setup(this.drawingCanvas.nativeElement);
    this.initializeLayers(); // Ensure layers are initialized

    const savedDrawing = localStorage.getItem('userDrawing');
    if (savedDrawing) {
      this.paperScope.project.importJSON(savedDrawing);
    }
    // Mark the canvas as ready once everything is set up
    this.isCanvasReady = true;

  }

  isBackgroundBlack(): boolean {
    return (
      this.strokeHexColor === '#000000' ||
      this.mapColorNameToHex(this.strokeHexColor) === '#000000'
    );
  }

  private saveState(): void {
    if (this.isUndoRedoAction) {
      console.log('Undo/redo action in progress, not saving state.');
      return; // Don't save state if undo/redo is happening
    }

    const currentState = this.paperScope.project.exportJSON();

    // Remove any future states if we're not at the end of the history
    this.stateHistory = this.stateHistory.slice(0, this.currentStateIndex + 1);

    // Add the new state
    this.stateHistory.push(currentState);
    this.currentStateIndex++;

    // Limit the history size
    if (this.stateHistory.length > this.maxHistoryStates) {
      this.stateHistory.shift();
      this.currentStateIndex--;
    }

    // Save to localStorage
    localStorage.setItem(
      'drawingStateHistory',
      JSON.stringify(this.stateHistory)
    );

    console.log('State saved.');
    console.log('Current State Index: ', this.currentStateIndex);
    console.log('Total History Length: ', this.stateHistory.length);
  }
  undo(): void {
    if (this.isActionInProgress) return; // Prevent multiple concurrent actions

    this.isActionInProgress = true; // Set the flag to block further actions
    console.log('Undo triggered.');

    if (this.currentStateIndex > 0) {
      this.isUndoRedoAction = true;
      this.currentStateIndex--;
      this.loadState().then(() => {
        this.isUndoRedoAction = false;
        this.isActionInProgress = false; // Allow new actions after completion
      });
    } else {
      this.isActionInProgress = false; // If no action, reset the flag
    }
  }

  // Modified redo method
  redo(): void {
    console.log('Redo triggered.');
    if (this.currentStateIndex <= this.stateHistory.length - 1) {
      this.isUndoRedoAction = true; // Set the flag before loading the state
      console.log("HIER");
      this.currentStateIndex++;
      this.loadState();
      this.isUndoRedoAction = false; // Reset the flag after loading
    }
    console.log('After redo, currentStateIndex: ', this.currentStateIndex);
    console.log('Total History Length: ', this.stateHistory.length);
  }
  private async loadState(): Promise<void> {
    console.log('Loading state at index: ', this.currentStateIndex);

    if (this.currentStateIndex >= 0 && this.currentStateIndex < this.stateHistory.length) {
      this.paperScope.project.clear(); // Clear the project

      // Wait for the project to finish importing the saved state
      await new Promise<void>((resolve) => {
        this.paperScope.project.importJSON(this.stateHistory[this.currentStateIndex]);
        this.paperScope.view.update(); // Ensure view is updated
        resolve(); // Resolve the promise when done
      });

      console.log('State loaded.');
    } else {
      console.warn('Invalid state index:', this.currentStateIndex);
    }
  }
  handleDialogClose(event: {
    success: boolean;
    color: string;
    backgroundColor: string;
  }): void {
    if (event.success) {
      const selectedColor = event.color;
      const selectedBackgroundColor = event.backgroundColor;

      // Update both the posterSource and postCardSource based on the selected color
      this.posterSource = this.frameSources[selectedColor].poster;
      this.postCardSource =
        this.frameSources[selectedColor].postcard || this.postCardSource;

      // Set the background color
      this.setBackground(selectedBackgroundColor);

      // Check if the selected background color is black, and set drawing color to white if true
      if (
        selectedBackgroundColor === 'Schwarz' ||
        this.mapColorNameToHex(selectedBackgroundColor) === '#000000'
      ) {
        this.strokeColor = new paper.Color('#FFFFFF'); // Set drawing color to white
        this.strokeHexColor = '#FFFFFF'; // Update the hex color for the template
      } else {
        this.strokeColor = new paper.Color('#000000'); // Set drawing color to black
        this.strokeHexColor = '#000000'; // Update the hex color for the template
      }

      this.initializePaperCanvas(); // Initialize the canvas again after clearing it
      this.initializeDrawing(); // Ensure this is called here

      // Save the selected colors in localStorage
      localStorage.setItem('selectedFrameColor', selectedColor);
      localStorage.setItem('selectedBackgroundColor', selectedBackgroundColor);

      const savedHistory = localStorage.getItem('drawingStateHistory');
      if (savedHistory) {
        this.stateHistory = JSON.parse(savedHistory);
        this.currentStateIndex = this.stateHistory.length - 1;
      }

      this.clearCanvas(); // Reset the canvas and apply the new frame

      setTimeout(() => {
        this.saveState();  // Call saveState after the delay
        console.log('Initial state saved after delay');
      }, 100); // Adjust the delay time (in milliseconds) as needed, e.g., 500ms

    }
    this.isDialogOpen = false;
  }
  setBackground(color: string): void {
    if (!this.isCanvasReady) {
      console.warn('Canvas not ready yet, delaying background setting.');
      setTimeout(() => this.setBackground(color), 500); // Try again after 100ms
      return;
    }

    const backgroundColor = this.mapColorNameToHex(color); // Optionally map color names to hex codes

    // Save the background color in localStorage
    localStorage.setItem('selectedBackgroundColor', color);

    // Clear the previous background
    this.backgroundLayer.removeChildren();

    // Get the correct size for the canvas based on whether it's a postcard or a poster
    const size = this.isPostcard ? this.postcardSize : this.posterSize;

    // Set the view size of the canvas to match the postcard or poster size
    this.paperScope.view.viewSize = new this.paperScope.Size(
      size.width,
      size.height
    );

    // Create a new rectangle that completely covers the canvas
    const backgroundRect = new this.paperScope.Path.Rectangle({
      point: [0, 0], // Starting from the top-left corner
      size: [size.width, size.height], // Make sure it covers the entire width and height
      fillColor: backgroundColor,
    });

    this.backgroundLayer.addChild(backgroundRect);
    this.backgroundLayer.sendToBack(); // Ensure the background is behind other layers
  }
  updateStrokeColor(newColor: string): void {
    this.strokeHexColor = newColor;
    this.strokeColor = new paper.Color(newColor); // Convert the hex to a paper.Color object
  }
  // Optional helper to map color names to hex codes
  mapColorNameToHex(color: string): string {
    const colorMap: { [key: string]: string } = {
      Weiß: '#FFFFFF',
      Hellblau: '#ADD8E6', // Light blue hex code
      Schwarz: '#000000',
      Blau: '#0000FF',
      Rot: '#FF0000',
      Grün: '#008000',
      Gelb: '#FFFF00',
      Rosa: '#FFC0CB',
    };
    return colorMap[color] || '#FFFFFF'; // Default to white
  }
  savePlakat(): void {
    this.plakatService.createPlakat(this.plakat).subscribe((response) => {
      console.log('Plakat created:', response);
    });
  }
  savePosterDrawing(): void {
    const drawingJSON = this.paperScope.project.exportJSON(); // Export the drawing as JSON
    localStorage.setItem('posterDrawing', drawingJSON); // Save it only for the poster
    localStorage.setItem('drawingTitle', this.drawingTitle); // Optionally save the title
    this.toastr.success('Dein Plakat wurde gespeichert!');
  }
  savePostcardDrawing(): void {
    const drawingJSON = this.paperScope.project.exportJSON(); // Export the drawing as JSON
    localStorage.setItem('postcardDrawing', drawingJSON); // Save it for postcards
    localStorage.setItem('drawingTitle', this.drawingTitle); // Save title (optional)
    this.toastr.success('Deine Postkarte wurde gespeichert!');
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
  svgToBase64(svgString: string): string {
    const encoder = new TextEncoder();
    const data = encoder.encode(svgString);

    let binaryString = '';
    data.forEach((byte) => {
      binaryString += String.fromCharCode(byte);
    });
    return window.btoa(binaryString);
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
        //this.saveState();
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

  addStickerToCanvas(stickerUrl: string, isUploaded: boolean = false) {
    if (!this.isCanvasReady) {
      console.warn('Canvas not ready yet, delaying sticker addition.');
      setTimeout(() => this.addStickerToCanvas(stickerUrl, isUploaded), 100);
      return;
    }

    this.paperScope.activate();
    this.saveState();

    // Add the sticker to the canvas but make it invisible initially
    const sticker = new paper.Raster({
      source: stickerUrl,
      position: this.lastDropPoint,
      visible: false, // Hide the sticker initially
    });

    sticker.onLoad = () => {
      const scaleFactor = isUploaded ? 150 : 100;
      sticker.scale(
        scaleFactor / sticker.bounds.width,
        scaleFactor / sticker.bounds.height
      );

      requestAnimationFrame(() => {
        sticker.visible = true;
      });

      const group = new this.paperScope.Group([sticker]);
      this.addResizeAndRotationHandles(group, sticker);
    };

    this.stickers.push(sticker);
  }

  addResizeAndRotationHandles(group: paper.Group, sticker: paper.Raster): void {
    // Get the selected background color from localStorage, default to white background (black handlers)
    const savedBackgroundColor = localStorage.getItem('selectedBackgroundColor') || 'Weiß';
    const handlerColor = savedBackgroundColor === 'Schwarz' ? 'FFFFFF' : '000000'; // White handlers for black background, black handlers otherwise

    // Add resize SVG icon (bi-arrows-angle-expand) as the resize handle
    const resizeHandle = new paper.Raster({
      source:
        'data:image/svg+xml;base64,' +
        this.svgToBase64(`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#${handlerColor}" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
        </svg>
      `),
      position: sticker.bounds.bottomRight.add([3, 0]), // Position the resize handle
      opacity: 0, // Make it invisible initially
    });

    // Add delete SVG icon as the delete handle
    const deleteHandle = new paper.Raster({
      source:
        'data:image/svg+xml;base64,' +
        this.svgToBase64(`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#${handlerColor}" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      `),
      position: sticker.bounds.topLeft.add([0, 0]), // Position the delete handle
      opacity: 0, // Make it invisible initially
    });

    // Add rotation SVG icon (bi-arrow-clockwise) as the rotation handle
    const rotationHandle = new paper.Raster({
      source:
        'data:image/svg+xml;base64,' +
        this.svgToBase64(`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#${handlerColor}" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
      </svg>
      `),
      position: sticker.bounds.topRight.add([3, 0]), // Position the rotation handle
      opacity: 0, // Make it invisible initially
    });

    group.addChild(resizeHandle);
    group.addChild(deleteHandle);
    group.addChild(rotationHandle);

    // Enable dragging, resizing, and rotation for the group
    this.enableStickerInteraction(group, resizeHandle, rotationHandle);

    // Toggle handles on click
    let handlesVisible = false;
    group.onDoubleClick = () => {
      handlesVisible = !handlesVisible; // Toggle visibility
      resizeHandle.opacity = handlesVisible ? 1 : 0;
      deleteHandle.opacity = handlesVisible ? 1 : 0;
      rotationHandle.opacity = handlesVisible ? 1 : 0;
    };
    deleteHandle.onClick = () => {
      group.remove(); // Remove the group (sticker + handles) from the canvas
      const index = this.stickers.indexOf(sticker);
      if (index > -1) {
        this.stickers.splice(index, 1); // Remove the sticker from the stickers array
      }
      this.saveState(); // Save the state after deletion
    };
  }

  enableStickerInteraction(
    group: paper.Group,
    resizeHandle: paper.Raster,
    rotationHandle: paper.Raster
  ): void {
    let isResizing = false;
    let isRotating = false;
    let initialAngle = group.rotation;
    let initialMouseY = 0;
    const rotationSpeedFactor = 0.08; // A factor to adjust the sensitivity of the rotation

    group.onMouseDown = (event: paper.MouseEvent) => {
      event.stopPropagation(); // Stop the event from propagating to the canvas

      if (resizeHandle.bounds.contains(event.point)) {
        isResizing = true; // Start resizing if the handle is clicked
      } else if (rotationHandle.bounds.contains(event.point)) {
        isRotating = true; // Start rotating if the handle is clicked
        initialAngle = group.rotation; // Store the initial angle for rotation
        initialMouseY = event.point.y; // Store the initial Y-coordinate of the mouse
      }
    };

    group.onMouseDrag = (event: paper.MouseEvent) => {
      event.stopPropagation(); // Prevent canvas drawing while dragging, resizing, or rotating

      if (isResizing) {
        const delta = event.delta;
        const scaleFactor = (delta.x + delta.y) / 100;
        group.scale(1 + scaleFactor, group.bounds.bottomRight);
      } else if (isRotating) {
        // Calculate the new rotation angle based on the mouse's vertical movement
        const deltaY = event.point.y - initialMouseY;
        const angle = deltaY * rotationSpeedFactor; // Rotate based on vertical mouse movement
        group.rotation = initialAngle + angle;
      } else {
        group.position = group.position.add(event.delta); // Move the entire group
      }
    };

    group.onMouseUp = (event: paper.MouseEvent) => {
      event.stopPropagation(); // Stop event propagation
      isResizing = false;
      isRotating = false;
    };
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
    const savedBackgroundColor =
      localStorage.getItem('selectedBackgroundColor') || 'white';
    const backgroundColor = this.mapColorNameToHex(savedBackgroundColor);

    // Choose the correct size for postcard or poster
    const initialSize = this.isPostcard ? this.postcardSize : this.posterSize;

    // Ensure the view size is set correctly
    this.paperScope.view.viewSize = new this.paperScope.Size(
      initialSize.width,
      initialSize.height
    );

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

    const initialSource = this.isPostcard
      ? this.postCardSource
      : this.posterSource;
    const initialFrame = new this.paperScope.Raster({
      source: initialSource,
      position: this.paperScope.view.center,
    });

    initialFrame.onLoad = () => {
      initialFrame.size = new this.paperScope.Size(
        initialSize.width,
        initialSize.height
      ); // Frame matches the size
      this.frameLayer.addChild(initialFrame);
      this.paperScope.project.activeLayer.activate();
    };
  }

  bringFrameLayerToFront(): void {
    this.frameLayer.bringToFront();
    this.paperScope.view.update();
  }
  enableDrawing(): void {
    if (!this.isCanvasReady) {
      console.log('Canvas is not ready yet.');
      return;
    }

    console.log('Canvas is ready, enabling drawing.');

    this.paperScope.view.onMouseDown = this.startDrawing.bind(this);
    this.paperScope.view.onMouseDrag = this.draw.bind(this);
    this.paperScope.view.onMouseUp = this.stopDrawing.bind(this);
  }

  startDrawing(event: paper.MouseEvent): void {
    if (this.isDraggingSticker) {
      console.log('Dragging sticker, not drawing.');
      return;
    }

    this.isDrawing = true;

    if (this.isInsideDrawingArea(event.point)) {
      console.log('Started drawing at:', event.point);
      this.drawingPath = new this.paperScope.Path({
        strokeColor: this.strokeColor,
        strokeWidth: this.strokeSize,
      });
      this.drawingPath.add(event.point);

      // Don't save state immediately when starting a drawing
    } else {
      console.log('Mouse down outside of drawing area');
    }
  }


  draw(event: paper.MouseEvent): void {
    if (this.isDraggingSticker || !this.isDrawing || !this.drawingPath) {
      console.log('Not drawing. isDraggingSticker:', this.isDraggingSticker, 'isDrawing:', this.isDrawing, 'drawingPath:', !!this.drawingPath);
      return;
    }

    if (this.isInsideDrawingArea(event.point)) {
      console.log('Drawing at:', event.point);
      this.drawingPath.add(event.point);
      this.paperScope.view.requestUpdate();
    } else {
      console.log('Mouse drag outside of drawing area');
    }
  }
  switchFormat() {
    // Save the current drawing before switching formats
    if (this.isPoster) {
      const drawingJSON = this.paperScope.project.exportJSON(); // Export the drawing as JSON
      localStorage.setItem('posterDrawing', drawingJSON); // Save it only for the poster
      localStorage.setItem('drawingTitle', this.drawingTitle);
    } else {
      const drawingJSON = this.paperScope.project.exportJSON(); // Export the drawing as JSON
      localStorage.setItem('postcardDrawing', drawingJSON); // Save it for postcards
      localStorage.setItem('drawingTitle', this.drawingTitle); // Save title (optional)
    }

    // Toggle between postcard and poster formats
    this.isPostcard = !this.isPostcard;
    this.isPoster = !this.isPoster;

    // Remove the frame and resize the canvas for the new format
    this.frameLayer.removeChildren();

    // Set the new size for the selected format (postcard or poster)
    const newSize = this.isPostcard ? this.postcardSize : this.posterSize;
    const newSource = this.isPostcard ? this.postCardSource : this.posterSource;

    // Update the canvas size for the new format
    this.paperScope.view.viewSize = new this.paperScope.Size(
      newSize.width,
      newSize.height
    );

    // Set the background to fill the entire canvas
    const savedBackgroundColor =
      localStorage.getItem('selectedBackgroundColor') || 'white';
    this.setBackground(savedBackgroundColor); // Ensure the background fills the entire canvas

    // Add the new frame (poster or postcard) after resizing the canvas
    const newFrame = new this.paperScope.Raster({
      source: newSource,
      position: this.paperScope.view.center,
    });

    newFrame.onLoad = () => {
      newFrame.size = new this.paperScope.Size(newSize.width, newSize.height);
      this.frameLayer.addChild(newFrame);
      this.paperScope.view.update();

      // Restore the drawing based on the format
      if (this.isPostcard) {
        this.restorePostcardDrawing(); // Load the saved postcard drawing
      } else {
        this.restorePosterDrawing(); // Load the saved poster drawing
      }
    };
  }
  restorePosterDrawing(): void {
    const savedPosterDrawing = localStorage.getItem('posterDrawing'); // Use 'posterDrawing' key
    if (savedPosterDrawing) {
      // Clear the current project and import the saved drawing
      this.paperScope.project.clear(); // Clear the canvas before restoring
      this.paperScope.project.importJSON(savedPosterDrawing); // Load the saved poster drawing
    } else {
      this.clearCanvas(); // If there's no saved drawing, clear the canvas
    }
  }

  restorePostcardDrawing(): void {
    const savedPostcardDrawing = localStorage.getItem('postcardDrawing'); // Use 'postcardDrawing' key
    if (savedPostcardDrawing) {
      // Clear the current project and import the saved drawing
      this.paperScope.project.clear(); // Clear the canvas before restoring
      this.paperScope.project.importJSON(savedPostcardDrawing); // Load the saved postcard drawing
    } else {
      this.clearCanvas(); // If there's no saved drawing, clear the canvas
    }
  }

  stopDrawing(): void {
    console.log('Mouse up, stopping drawing.');
    this.isDrawing = false;

    // Save state after drawing is completed
    this.saveState();
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
    if (this.isPoster) {
      this.savePosterDrawing();
    } else {
      this.savePostcardDrawing();
    }
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
          const uploadedSticker = e.target.result;
          this.addStickerToCanvas(uploadedSticker, true); // Pass 'true' for user-uploaded stickers
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  }

  isCanvasEmpty(): boolean {
    return (
      this.paperScope.project.activeLayer &&
      this.paperScope.project.activeLayer.isEmpty()
    );
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

    this.stateHistory = [];
    this.currentStateIndex = -1;
    localStorage.removeItem('drawingStateHistory');

    this.toastr.success('Neues Plakat bereit!');
  }

  initializeDrawing(): void {
    console.log('initializeDrawing called');
    this.enableDrawing();
  }

  openDialog() {
    this.isDialogOpen = true;
    this.initializePaperCanvas();
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

