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
          icon="https://dl.dropbox.com/scl/fi/5vs6a6493e4foyo4hf81x/image00040-Kopie.png?rlkey=h0m9agwkdrb54ekf5gd88uarc&dl=0"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Institution"
          description="Als Institution kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/attack-protection"
          icon="https://dl.dropbox.com/scl/fi/ti76eglkkw6at1sdkpe9p/image00021-Kopie.png?rlkey=lxw0z16hvhh2616lo6v7kv37d&dl=0"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Team"
          description="Als Team kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/actions"
          icon="https://dl.dropbox.com/scl/fi/13oll0njx31ibi3uo9ff1/image00013-Kopie-2.png?rlkey=h6bi7jnz5gfq9qce5ycx1k667&dl=0"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Künstler*in"
          description="Als Künstler*in kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          resourceUrl="https://auth0.com/docs/actions"
          icon="https://dl.dropbox.com/scl/fi/dimcsgnrsxyydjklttx2s/image00042-Kopie.png?rlkey=w48ja8bruw1goy926pwbvrmyy&dl=0"
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
