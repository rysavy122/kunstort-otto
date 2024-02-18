// Angular
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third Party
import { ToastrModule } from 'ngx-toastr';

// Components
import { Auth0FeatureComponent } from './components/auth0-feature.component';
import { Auth0FeaturesComponent } from './components/auth0-features.component';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { NewQuestionInputComponent } from './components/inputs/new-question-input.component';

import { COMPONENTS } from './components';





@NgModule({
  declarations: [
    ...COMPONENTS,
    Auth0FeaturesComponent,
    Auth0FeatureComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    NewQuestionInputComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule {}
