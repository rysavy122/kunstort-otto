import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <div id="modal-container">
  <div class="modal-backdrop">
  <div class="modal">
    <h2>Confirm Action</h2>
    <p>Do you really want to submit this question?</p>
    <button class="submit-button" (click)="confirm()">Bestätigen</button>
    <button (click)="cancel()">Zurück</button>
  </div>
</div>

  </div>
  `,
})
export class ConfirmationDialogComponent {
  isVisible = false;
  onConfirm!: () => void;
  onCancel!: () => void;

  show(onConfirm: () => void, onCancel: () => void) {
    this.isVisible = true;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
  }

  confirm() {
    this.isVisible = false;
    if (this.onConfirm) {
      this.onConfirm();
    }
  }

  cancel() {
    this.isVisible = false;
    if (this.onCancel) {
      this.onCancel();
    }
  }
}
