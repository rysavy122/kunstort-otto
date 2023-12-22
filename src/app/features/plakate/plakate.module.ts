import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PlakateComponent } from './plakate';

@NgModule({
  declarations: [PlakateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlakateComponent,
      },
    ]),
  ]
})
export class PlakateModule {}
