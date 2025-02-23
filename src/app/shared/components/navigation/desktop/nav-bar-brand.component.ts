import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          style="height:50px; margin-left: 50px;"
          class="nav-bar__logo"
          src="https://ottoblob.blob.core.windows.net/images/Kunstort-Otto_Logo.png"
          alt="Otto logo"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
