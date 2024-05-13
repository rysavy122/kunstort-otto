import { Component } from '@angular/core';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title" style="color: black;">Wähle eine Rolle aus und mache mit.</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Als Gast/Besucherin"
          description="Als Gast/Besucherin kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/multifactor-authentication"
          icon="https://ottoblob.blob.core.windows.net/images/*image00040 Kopie.png"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Institution"
          description="Als Institution kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/attack-protection"
          icon="https://ottoblob.blob.core.windows.net/images/*image00021 Kopie.png"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Team"
          description="Als Team kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/actions"
          icon="https://ottoblob.blob.core.windows.net/images/*image00013 Kopie 2.png"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Künstler*in"
          description="Als Künstler*in kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/actions"
          icon="https://ottoblob.blob.core.windows.net/images/*image00042 Kopie.png"
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
