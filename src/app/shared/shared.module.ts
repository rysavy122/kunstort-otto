import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';
import { Auth0FeatureComponent } from './components/auth0-feature.component';
import { Auth0FeaturesComponent } from './components/auth0-features.component';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { NewQuestionInputComponent } from './components/inputs/new-question-input.component';
import { EditorComponent } from '@tinymce/tinymce-angular';



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
    EditorComponent,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule {}
