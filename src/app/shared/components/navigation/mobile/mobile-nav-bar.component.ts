import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-bar',
  template: `
    <div class="mobile-nav-bar__container">
      <nav class="mobile-nav-bar">
        <app-mobile-nav-bar-brand
          (mobileNavBarBrandClick)="closeMobileMenu()"
        ></app-mobile-nav-bar-brand>

        <!-- Replace material icons with inline SVGs for the toggle button -->
        <span
          id="mobile-menu-toggle-button"
          (click)="toggleMobileMenu()"
          class="mobile-nav-bar__toggle"
        >
          <!-- Conditionally render SVG for either the hamburger or close icon -->
          <ng-container *ngIf="mobileMenuIcon === MobileMenuIcon.MENU">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </ng-container>
          <ng-container *ngIf="mobileMenuIcon === MobileMenuIcon.CLOSE">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </ng-container>
        </span>

        <div
          *ngIf="mobileMenuState === MobileMenuState.OPEN"
          class="mobile-nav-bar__menu"
        >
          <app-mobile-nav-bar-tabs
            (mobileNavBarTabClick)="handleNavTabClick($event)"
          ></app-mobile-nav-bar-tabs>
          <app-mobile-nav-bar-buttons
            (signupClick)="closeMobileMenu()"
            (loginClick)="closeMobileMenu()"
          ></app-mobile-nav-bar-buttons>
        </div>
      </nav>
    </div>
  `,
})
export class MobileNavBarComponent implements OnInit {
  MobileMenuState = {
    OPEN: 'open',
    CLOSED: 'closed',
  };

  MobileMenuIcon = {
    CLOSE: 'close',
    MENU: 'menu',
  };

  mobileMenuState = this.MobileMenuState.CLOSED;
  mobileMenuIcon = this.MobileMenuIcon.MENU;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (this.mobileMenuState === this.MobileMenuState.OPEN) {
          this.closeMobileMenu();
        }
      }
    });
  }

  toggleMobileMenu() {
    switch (this.mobileMenuState) {
      case this.MobileMenuState.OPEN: {
        this.closeMobileMenu();

        return;
      }

      case this.MobileMenuState.CLOSED: {
        this.openMobileMenu();

        return;
      }
    }
  }

  closeMobileMenu() {
    document.body.classList.remove('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.CLOSED;
    this.mobileMenuIcon = this.MobileMenuIcon.MENU;
  }

  openMobileMenu() {
    document.body.classList.add('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.OPEN;
    this.mobileMenuIcon = this.MobileMenuIcon.CLOSE;
  }

  handleNavTabClick(path: string) {
    if (
      this.mobileMenuState === this.MobileMenuState.OPEN &&
      path === this.router.url
    ) {
      this.closeMobileMenu();
    }
  }
}

