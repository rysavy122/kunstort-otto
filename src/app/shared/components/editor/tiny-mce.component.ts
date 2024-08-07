import { Component, AfterViewInit, OnDestroy, EventEmitter, Output, OnInit } from '@angular/core';
import { Editor } from 'tinymce';
import { environment as env } from '../../../../environments/environment';


declare var tinymce: any;

@Component({
    selector: 'app-tiny-mce',
    template: `
        <div>
            <div *ngIf="showSpinner" class="loading-spinner">
          </div>
            <textarea id="tinyMceEditor"></textarea>
        </div>
    `
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {
    @Output() editorContent = new EventEmitter<string>();
    isLoading = true; // Initial loading state
    showSpinner = false; // Controls spinner visibility
    private spinnerTimeout: any;
    private apiKey = `${env.api.serverUrl}/api/kommentare/`;


    ngAfterViewInit() {
        // Delay for showing the spinner
        this.spinnerTimeout = setTimeout(() => this.showSpinner = true, 500);

        tinymce.init({
            selector: '#tinyMceEditor',
            plugins: ' ',
            images_upload_url: '/api/upload-image',
            media_upload_url: '/api/upload-audio',
            setup: (editor: Editor) => {
                editor.on('change', () => {
                    this.editorContent.emit(editor.getContent());
                });
            },
            init_instance_callback: (editor: Editor) => {
                this.isLoading = false;
                this.showSpinner = false;
                clearTimeout(this.spinnerTimeout); // Clear the timeout if editor loads before the delay
            },
            apikey: 'YOUR_API_KEY_HERE'

        });
    }

    ngOnDestroy() {
        if (!this.isLoading) {
            tinymce.remove(tinymce.get('tinyMceEditor'));
        }
        clearTimeout(this.spinnerTimeout); // Ensure to clear timeout on component destruction
    }
}
