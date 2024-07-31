import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth0-feature',
  template: `
  <div
   class="auth0-feature"
  (click)="selectRole()"
  >
      <h3 class="auth0-feature__headline">
        <img
          class="auth0-feature__icon"
          [src]="icon"
          alt="external link icon"
        />
      </h3>
      <h2>{{ title }}</h2>
      <p class="auth0-feature__description">{{ description }}</p>
  </div>

  `,
})
export class Auth0FeatureComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() resourceUrl: string | undefined;
  @Input() icon: string | undefined;
  @Input() role: string | undefined;
  @Output() roleSelected = new EventEmitter<string>();


  selectRole() {
    this.roleSelected.emit(this.role);
    console.log(this.role)
  }

}
