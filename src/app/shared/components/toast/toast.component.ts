import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div id="toast-wrapper" *ngIf="showToast">
        <div id="toast-header">{{ message }}</div>
        <button id="dismiss">Dismiss</button>
    </div>
  `,
})
export class ToastComponent {
  constructor() {}

  message: string = 'Hier kommen Dynamisch die Toast Nachrichten';
  showToast: boolean = false;

}
