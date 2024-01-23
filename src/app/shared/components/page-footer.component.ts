import { Component } from '@angular/core';
import { Auth0ResourceModel } from '@app/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer">
      <div class="page-footer-grid">
        <div class="page-footer-grid__info">
          <div class="page-footer-info__message">
            <p class="page-footer-message__headline">
              <span>Website made by&nbsp;</span>
              <app-page-footer-hyperlink path="https://auth0.com/"
                >Denis Rysavy in Zusammenarbeit mit Kunsort Ottersberg .eV.</app-page-footer-hyperlink
              >
              <p>&copy; 2023 rysavy Alle Rechte vorbehalten.
            </p>
            <p class="page-footer-message__description">
              <app-page-footer-hyperlink
                path="https://auth0.com/docs/quickstarts/"
              >
                <span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit!
                </span>
                <u>Lorem ipsum dolor sit amet.</u>
              </app-page-footer-hyperlink>
            </p>
          </div>
          <div class="page-footer-info__button">
            <a
              id="create-account-button"
              class="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Werde jetzt Förderer/:in
            </a>
          </div>
          <div class="page-footer-info__resource-list">
            <div
              *ngFor="let resource of resourceList"
              class="page-footer-info__resource-list-item"
            >
              <app-page-footer-hyperlink [path]="resource.path">
                {{ resource.label }}
              </app-page-footer-hyperlink>
            </div>
          </div>
        </div>
        <div class="page-footer-grid__brand">
          <div class="page-footer-brand">
            <img
              class="page-footer-brand__logo"
              src="https://kunstort-otto.de/wp-content/themes/kso/images/kso-sprechblase.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <app-page-footer-hyperlink path="https://kunstort-otto.de/"
              >kunstort-otto.de</app-page-footer-hyperlink
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class PageFooterComponent {
  resourceList: Auth0ResourceModel[] = [
    {
      path: 'https://auth0.com/why-auth0/',
      label: 'Warum Mitglied werden ?',
    },
    {
      path: 'https://auth0.com/docs/get-started',
      label: 'Wie funktioniert es ?',
    },
    {
      path: 'https://auth0.com/blog/developers/',
      label: 'Wer wir sind.',
    },
    {
      path: 'https://auth0.com/contact-us',
      label: 'Kontaktiere uns für Fragen und Anliegen.',
    },
  ];
}
