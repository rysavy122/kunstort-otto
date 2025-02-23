import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';

@Component({
  selector: 'app-plakate',
  templateUrl: './plakate.component.html',
})
export class PlakateComponent implements OnInit {
  message = 'Hier werden Plakate erstellt...';

  constructor(
    public messageService: MessageService,
  ) {}

  ngOnInit(): void {
  }
}
