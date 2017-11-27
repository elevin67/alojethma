import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiePage } from './lie';

@NgModule({
  declarations: [
    LiePage,
  ],
  imports: [
    IonicPageModule.forChild(LiePage),
  ],
})
export class LiePageModule {}
