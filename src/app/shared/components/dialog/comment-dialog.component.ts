import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KommentarModel } from 'src/app/core/models/kommentar.model';
import { KommentarService } from 'src/app/core/services/kommentar.service';

@Component({
  selector: 'app-comment-dialog',
  template: `
    <div id="modal-container" *ngIf="isOpen">
      <div class="modal-backdrop">
        <div class="modal">
          <h2>Teile deine Meinung mit uns.</h2>
          <h6>Verfasse ein Kommentar und nehme an der Diskussion teil.</h6>

          <form action="

          "></form>

          <div class="inputs">
                      <!-- Comment Title Input -->
          <input
            type="text"
            [(ngModel)]="commentTitle"
            placeholder="Titel..."
            class="comment-title-input"
            style="margin-bottom: 25px;"
          />

          <!-- Comment Content Textarea -->
          <textarea
            [(ngModel)]="editorContent"
            placeholder="Kommentar..."
          ></textarea>

          </div>



          <div class="buttons">
          <!-- Submit Button -->
            <button class="submit-button" (click)="handleSubmit()">Bestätigen</button>
            <button class="close-button" (click)="closeDialog()">Zurück</button>
          </div>


        </div>
      </div>
    </div>
  `,
})
export class CommentDialogComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() commentSubmitted = new EventEmitter<KommentarModel>();
  @Input() parentKommentarId?: number;

  editorContent: string = '';
  commentTitle?: string;

  constructor(private kommentarService: KommentarService) { }

  handleSubmit() {
    if (!this.editorContent.trim()) return;

    const newComment: KommentarModel = {
      title: this.commentTitle?.trim() || undefined, // Title is optional
      comment: this.editorContent,
      parentKommentarId: this.parentKommentarId
    };

    this.kommentarService.addKommentar(newComment).subscribe({
      next: (savedComment) => {
        this.commentSubmitted.emit(savedComment);
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error saving comment:', error);
      }
    });
  }

  closeDialog() {
    this.close.emit();
  }
}
