import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KommentarModel } from 'src/app/core/models/kommentar.model';
import { KommentarService } from 'src/app/core/services/kommentar-service';


@Component({
    selector: 'app-comment-dialog',
    template: `
        <div id="modal-container" *ngIf="isOpen">
            <div class="modal-backdrop">
                <div class="modal">
                    <h2>Teile deine Meinung mit uns.</h2>
                    <h6>Verfasse ein Kommentar und nehme an der Diskussion teil.</h6>
                    <input type="text" [(ngModel)]="commentTitle" placeholder="Title">
                    <textarea type="text" [(ngModel)]="commentBody" placeholder="Kommentar"></textarea>
                    <app-tiny-mce (editorContent)="handleEditorContent($event)"></app-tiny-mce>
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
    @Output() commentSubmitted = new EventEmitter<KommentarModel>();
    editor: any;
    editorContent: string = '';
    commentTitle: string = '';
    commentBody: string = '';


  constructor(private kommentarService: KommentarService) { }


handleSubmit() {
        if (!this.editorContent.trim() || !this.commentTitle.trim()) return;

        const newComment: KommentarModel = {
            title: this.commentTitle,
            comment: this.editorContent,
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
        console.log("Test")
    }

  
  handleEditorContent(content: string) {
    this.editorContent = content;
}
    closeDialog() {
        this.close.emit();
      }

}