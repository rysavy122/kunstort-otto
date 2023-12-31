import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { MeinPlakatComponent } from '../mein-plakat/mein-plakat.component';
import { SafeHtmlPipe } from 'src/app/safe-html.pipe';

@NgModule({
  declarations: [MeinPlakatComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MeinPlakatComponent,
      },
    ]),
  ]
})
export class MeinPlakatModule {}
