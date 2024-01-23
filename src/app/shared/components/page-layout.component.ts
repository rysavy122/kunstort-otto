import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="page-layout">
      <app-nav-bar></app-nav-bar>
      <app-mobile-nav-bar></app-mobile-nav-bar>
      <div class="page-layout__content">
      <div class="slider">
  <input type="radio" name="slider" id="slide1" checked>
  <input type="radio" name="slider" id="slide2">
  <input type="radio" name="slider" id="slide3">
  <input type="radio" name="slider" id="slide4">
  
  <div class="slides">
    <div class="slide slide1">
    </div>
    <div class="slide slide2">
    </div>
    <div class="slide slide3">
    </div>
    <div class="slide slide4">
    </div>
  </div>
  
  <div class="controls">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label>
  </div>
</div>

    
      <app-toast></app-toast>
        <ng-content></ng-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class PageLayoutComponent { }
