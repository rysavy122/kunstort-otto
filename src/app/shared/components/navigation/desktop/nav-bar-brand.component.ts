import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          style="height:60px;"
          class="nav-bar__logo"
          src="https://drive.google.com/uc?export=view&id=17P35oLhnZWECY1bM__w_6gxmAcpOMYh5"
          alt="Otto logo"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
