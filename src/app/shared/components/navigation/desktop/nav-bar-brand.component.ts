import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          style="height:50px; margin-left: 50px;"
          class="nav-bar__logo"
          src="https://dl.dropboxusercontent.com/scl/fi/okeb3hyqtdymzz3il2w5m/Kunstort-Otto_Logo.png?rlkey=hctodkeapapu5rds4kma4b0rv&raw=1"
          alt="Otto logo"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
