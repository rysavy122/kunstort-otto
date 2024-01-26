import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';


@Component({
  selector: 'app-confirm-dialog',
  template: `
  <div class="modal-container" *ngIf="isOpen">
  <div class="modal-backdrop">
  <div class="modal">
    <h2>Stelle eine neue Forschungsfrage.</h2>
     <h6>Die aktuelle Diskussion mit allen Kommentaren wird dann gelöscht.<br/>
    <br/>
    <span>Achtung ! Diese Aktion kann nicht rückgängig gemacht werden !</span><br/><br/>
    Neue Forschungsfrage stellen ?
    </h6>
    <button class="submit-button" (click)="handleSubmit()">Bestätigen</button>
    <button class="close-button" (click)="closeDialog()">Zurück</button>
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
  @Input() forschungsfrage: string = '';
  @Input() isOpen = false;
  @Output() close = new EventEmitter<boolean>();

  handleSubmit() {
    if (!this.forschungsfrage.trim()) {
      return;
    }

    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage)
      .subscribe({
        next: (response) => {
          console.log('Forschungsfrage saved:', response);
          this.closeDialog(true);
        },
        error: (error) => {
          console.error('Error saving Forschungsfrage:', error);
          this.closeDialog(false);
        }
      });
  }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
  }
}
