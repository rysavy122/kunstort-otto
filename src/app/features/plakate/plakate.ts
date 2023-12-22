import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-plakate',
  templateUrl: './plakate.component.html',
})
export class PlakateComponent implements OnInit {
  message = 'Hier werden Plakate erstellt...';

  constructor(
    public messageService: MessageService,
  ) {}
  public Editor = ClassicEditor;
  public editorData = '<p>Initial content of the editor.</p>';
  

  ngOnInit(): void {
  }
}
