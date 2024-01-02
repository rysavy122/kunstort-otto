import { Component, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Editor } from 'tinymce';

declare var tinymce: any;

@Component({
    selector: 'app-tiny-mce',
    template: `<textarea id="tinyMceEditor"></textarea>`
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {
    @Output() editorContent = new EventEmitter<string>();

    ngAfterViewInit() {
        tinymce.init({
            selector: '#tinyMceEditor',
            plugins: 'lists link image table code help wordcount media',
            images_upload_url: '/api/upload-image',
            media_upload_url: '/api/upload-audio',
            setup: (editor: Editor) => {
                editor.on('change', () => {
                    this.editorContent.emit(editor.getContent());
                });
            }
        });
    }

    ngOnDestroy() {
        tinymce.remove(tinymce.get('tinyMceEditor'));
    }
}
