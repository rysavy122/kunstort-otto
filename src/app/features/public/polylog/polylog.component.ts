import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import { MessageModel } from '@app/core';

@Component({
  selector: 'app-polylog',
  templateUrl: './polylog.component.html',
})
export class PolylogComponent implements OnInit {
  message = '';
  errorMessage = 'Fehler beim laden der Forschungsfrage.'

  constructor(public messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.getPublicResource().subscribe((response) => {

      const data = response.data as MessageModel;
      const error = response.error;

      if (data && data.text) {
        this.message = data.text;
      } else if (error) {
        this.message = this.errorMessage;
      }
    });
  }
  }
