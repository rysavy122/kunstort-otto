import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  template: `
    <div class="home-banner home-banner--aqua-emerald">
      <div class="home-banner__wrapper">
        <div class="home-banner__headline"></div>
      <h1 class="home-banner__headline">Gemeinsam forschen!</h1>
      <p class="home-banner__description">
          Willkommen auf der interaktiven WebSeite vom <strong style="color: #f2d91a; font-weight: bold;">Kunstort Ottersberg eV</strong>.
      </p>
      <a
        class="button button--secondary"
        routerLink="/public/polylog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hier geht es direkt zum Blog →
      </a>
      </div>
    </div>
  `,
})
export class HomeComponent {
  background = ''
}
