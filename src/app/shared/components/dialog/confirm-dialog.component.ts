import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';


@Component({
  selector: 'app-confirm-dialog',
  template: `
  <div id="modal-container" *ngIf="isOpen">
  <div class="modal-backdrop">
  <div class="modal">
    <h2>Confirm Action</h2>
    <p>Do you really want to submit this question?</p>
    <button class="submit-button" (click)="handleSubmit()">Bestätigen</button>
    <button (click)="closeDialog()">Zurück</button>
  </div>
</div>

  </div>
  `,
})
export class ConfirmationDialogComponent {

  constructor(
    private forschungsfrageService: ForschungsFrageService,
  ) {}

  forschungsfragen: ForschungsfragenModel[] = [];
  @Input() isOpen = false;
  @Input() forschungsfrage: string = '';
  @Output() close = new EventEmitter<boolean>(); // Emit a boolean

  handleSubmit() {
    if (!this.forschungsfrage.trim()) {
      return;
    }
  
    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage)
      .subscribe({
        next: (response) => {
          console.log('Forschungsfrage saved:', response);
          this.closeDialog(true); // Emit true on successful submission
        },
        error: (error) => {
          console.error('Error saving Forschungsfrage:', error);
          this.closeDialog(false); // Emit false on error
        }
      });
  }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
  }
}
