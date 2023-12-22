import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="Angular logo" />
      </div>
      <h1 class="hero-banner__headline">Kunstort Otto - Gemeinsam forschen</h1>
      <p class="hero-banner__description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, numquam. <strong>Otto</strong>.
      </p>
      <a
        id="code-sample-link"
        class="button button--secondary"
        routerLink="/public/polylog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hier geht es direkt zum Blog →
      </a>
    </div>
  `,
})
export class HomeComponent {
  logo = 'https://drive.google.com/uc?export=view&id=17P35oLhnZWECY1bM__w_6gxmAcpOMYh5';
}
