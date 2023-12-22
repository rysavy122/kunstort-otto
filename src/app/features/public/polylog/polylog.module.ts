import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PolylogComponent } from './polylog.component';

@NgModule({
  declarations: [PolylogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PolylogComponent,
      },
    ]),
  ]
})
export class PolylogModule {}
