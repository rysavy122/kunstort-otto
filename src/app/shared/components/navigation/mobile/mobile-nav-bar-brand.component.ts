import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img
          class="mobile-nav-bar__logo"
          style="height:62px; margin-top:25px;"
          src="https://ottoblob.blob.core.windows.net/images/Kunstort-Otto_Logo.png"
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
