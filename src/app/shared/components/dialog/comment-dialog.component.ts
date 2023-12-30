import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-comment-dialog',
    template: `
  <div id="modal-container" *ngIf="isOpen">
  <div class="modal-backdrop">
  <div class="modal">
    <h2>Teile deine Meinung mit uns.</h2>
    <h6>Verfasse ein Kommentar und nehme an der Diskussion teil.</h6>
      <editor
        apiKey="umt68mpo8gend1vb2nfktubq4s8ihhg6p36si032mybvqbkn"
        [init]="{ plugins: 'lists link image table code help wordcount media' }"
      ></editor>
    <button class="submit-button" (click)="handleSubmit()">Bestätigen</button>
    <button class="close-button" (click)="closeDialog()">Zurück</button>
  </div>
</div>

  </div>
  `,
})
export class CommentDialogComponent {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    constructor(
    ) { }

    handleSubmit() {
    }
    closeDialog() {
        this.close.emit();
      }

}