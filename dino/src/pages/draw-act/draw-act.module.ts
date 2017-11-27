import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawActPage } from './draw-act';
import { Screenshot } from '@ionic-native/screenshot';

@NgModule({
  declarations: [
    DrawActPage
  ],
  imports: [
    IonicPageModule.forChild(DrawActPage),
  ],
  providers: [
    Screenshot,
  ]
})
export class DrawActPageModule {}
