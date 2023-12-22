import { Component } from '@angular/core';

@Component({
  selector: 'app-new-question-input',
  template: `
    <input class="input--primary" type="text" placeholder="Stelle eine Neue Forschungsfrage">
  `,
})
export class NewQuestionInputComponent {
  constructor() {}

  handleNewQuestionInput(): void {
/*     this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    }); */
  }
}
