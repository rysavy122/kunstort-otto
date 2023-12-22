import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { ProtectedComponent } from './protected.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProtectedComponent,
      },
    ]),
  ]
})
export class ProtectedModule {}
