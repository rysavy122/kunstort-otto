import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo"></div>
      <h1 class="hero-banner__headline">Gemeinsam forschen!</h1>
      <p class="hero-banner__description">
          Willkommen auf der interaktiven WebSeite vom <strong style="color: #f2d91a; font-weight: bold;">Kunstort Ottersberg eV</strong>.
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
<!--       <div id="otto-colors">
        <img>
        <img>
        <img>
        <img>
        <img>
      </div>
    </div> -->


  `,
})
export class HomeComponent {
  //logo = 'https://dl.dropboxusercontent.com//scl/fi/g4zg9v3pgvbf81ntednx7/tmp_1703246253646.jpg?rlkey=slw2g5imv8lyrf7g1hesnqu08&raw=1';
  background = ''
}
