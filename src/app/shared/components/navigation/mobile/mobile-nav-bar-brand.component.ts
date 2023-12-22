import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img
          class="mobile-nav-bar__logo"
          style="height:42px;"
          src="https://drive.google.com/uc?export=view&id=17P35oLhnZWECY1bM__w_6gxmAcpOMYh5"
          alt="Otto logo"
        />
      </a>
    </div>
  `,
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}
