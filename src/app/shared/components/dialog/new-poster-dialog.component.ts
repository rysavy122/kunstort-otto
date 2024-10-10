import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-poster-dialog',
  template: `
    <div
      id="modal-container"
      *ngIf="isOpen"
      style=" border:2px solid royalblue;"
    >
      <div class="modal-backdrop">
        <div class="modal">
          <h2>Fang ein neues Plakat an.</h2>
          <br />
          <h6>
            Willst du wirklich eine Neues Plakat anfangen ? Das aktuelle Plakat
            wird gelöscht.
            <br />
            <br />
            <span>Achtung ! Dies kann nicht rückgängig gemacht werden !</span>
          </h6>
          <br />

          <div class="custom-select-wrapper">
            <h6>Wähle eine Rahmen Farbe:</h6>
            <div
              class="custom-select"
              [ngClass]="{ focused: dropdownOpen }"
              (click)="toggleDropdown()"
            >
              <div class="select-selected">{{ selectedColor | titlecase }}</div>
              <ul *ngIf="dropdownOpen" class="select-items">
                <li
                  *ngFor="let color of colors"
                  (click)="selectColor(color, $event)"
                >
                  {{ color | titlecase }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Dropdown for selecting background color -->
          <div class="custom-select-wrapper">
            <h6>Wähle eine Hintergrundfarbe:</h6>
            <div
              class="custom-select"
              [ngClass]="{ focused: backgroundDropdownOpen }"
              (click)="toggleBackgroundDropdown()"
            >
              <div class="select-selected">
                {{ selectedBackgroundColor | titlecase }}
              </div>
              <ul *ngIf="backgroundDropdownOpen" class="select-items">
                <li
                  *ngFor="let color of backgroundColors"
                  (click)="selectBackgroundColor(color, $event)"
                >
                  {{ color | titlecase }}
                </li>
              </ul>
            </div>
          </div>

          <button
            style="background-color: royalblue;"
            class="submit-button"
            (click)="handleSubmit()"
          >
            Bestätigen
          </button>
          <button class="close-button" (click)="closeDialog()">Zurück</button>
        </div>
      </div>
    </div>
  `,
})
export class NewPosterDialogComponent {
  constructor() {}

  @Input() isOpen = false;
  @Output() close = new EventEmitter<{
    success: boolean;
    color: string;
    backgroundColor: string;
  }>();
  selectedColor: string = 'Königsblau'; // Default selected color
  selectedBackgroundColor: string = 'Weiß'; // Default background color
  dropdownOpen = false; // Control the dropdown visibility
  backgroundDropdownOpen = false; // Control background color dropdown visibility

  colors: string[] = [
    'Königsblau',
    'Violette',
    'Rot',
    'Turquise',
    'Lila',
    'Pink',
    'Gelb',
    'Rosa',
    'Minze',
    'Babyblau',
    'Orange',
    'Grün',
  ];

  backgroundColors: string[] = [
    'Weiß',
    'Hellblau',
    'Schwarz',
    'Blau',
    'Rot',
    'Grün',
    'Gelb',
    'Rosa',
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle dropdown open/close
  }
  toggleBackgroundDropdown() {
    this.backgroundDropdownOpen = !this.backgroundDropdownOpen;
  }


  selectColor(color: string, event: Event) {
    event.stopPropagation(); // Prevent the parent click event from firing
    this.selectedColor = color;
    this.dropdownOpen = false; // Close the dropdown after selection
  }
  selectBackgroundColor(color: string, event: Event) {
    event.stopPropagation();
    this.selectedBackgroundColor = color;
    this.backgroundDropdownOpen = false;
  }

  handleSubmit() {
    this.closeDialog(true);
  }

  closeDialog(success: boolean = false) {
    this.close.emit({
      success: success,
      color: this.selectedColor,
      backgroundColor: this.selectedBackgroundColor, // Ensure the background color is emitted
    });
    this.isOpen = false;
  }
}
