import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-confirm-dialog',
  template: `
  <div class="modal-container" *ngIf="isOpen">
  <div class="modal-backdrop">
  <div *ngIf="isLoading" class="loading-indicator">
    Neue Forschungsfrage wird gestellt<span class="loading-dots"></span>
  </div>
  <div class="modal">
    <h2>Stelle eine neue Forschungsfrage.</h2>
     <h6>Die aktuelle Diskussion mit allen Kommentaren wird dann gelöscht.<br/>
    <br/>
    <span>Achtung ! <br/><br/>
    Diese Aktion kann nicht rückgängig gemacht werden !</span><br/><br/>
    Neue Forschungsfrage stellen ?
    </h6>
    <button class="submit-button" (click)="handleSubmit()">Bestätigen</button>
    <button class="close-button" (click)="closeDialog()">Abbrechen</button>
  </div>
</div>

  </div>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    private forschungsfrageService: ForschungsFrageService,
    private toastr: ToastrService,
  ) { }



  @Input() imageFile!: File;
  @Input() forschungsfrage: string = '';
  @Input() isOpen = false;
  @Output() close = new EventEmitter<boolean>();
  @Output() onSuccessfulUpload = new EventEmitter<void>();

  isLoading: boolean = false;

  handleSubmit() {
    if (!this.forschungsfrage.trim()) {
      return;
    }
    this.isLoading = true;

    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage, this.imageFile)
      .subscribe({
        next: (response) => {
          console.log('Forschungsfrage saved:', response);
          this.onSuccessfulUpload.emit();
          this.closeDialog(true);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error saving Forschungsfrage:', error);
          this.toastr.error('Fehler beim Stellen der Forschungsfrage!', 'Error');
          this.isLoading = false;
          this.closeDialog(false);
        }
      });
  }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
    console.log("Zurück Works")
    this.isOpen = false;
  }
}
