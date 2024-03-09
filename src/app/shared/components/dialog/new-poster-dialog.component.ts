import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-new-poster-dialog',
  template: `
  <div id="modal-container" *ngIf="isOpen" style=" border:2px solid royalblue;">
  <div class="modal-backdrop">
  <div class="modal">
    <h2>Fang ein neues Plakat an.</h2>
    <h6>Willst du wirklich eine Neues Plakat anfangen ?<br/>
     Das aktuelle Plakat wird gelöscht.
    <br/>
    <br/>
    <span>Achtung ! Dies kann nicht rückgängig gemacht werden !</span>
    </h6>
    <button style="background-color: royalblue;" class="submit-button" (click)="handleSubmit()">Bestätigen</button>
    <button class="close-button" (click)="closeDialog()">Zurück</button>
  </div>
</div>
  </div>
  `,
})
export class NewPosterDialogComponent {

  constructor(
  ) {}

  @Input() isOpen = false;
  @Output() close = new EventEmitter<boolean>();

  handleSubmit() {
    this.closeDialog(true);

  }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
    this.isOpen = false;
  }
}
