import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img
          class="mobile-nav-bar__logo"
          style="height:62px; margin-top:25px;"
          src="https://dl.dropboxusercontent.com/scl/fi/okeb3hyqtdymzz3il2w5m/Kunstort-Otto_Logo.png?rlkey=hctodkeapapu5rds4kma4b0rv&raw=1"
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
