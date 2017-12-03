import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightActPage } from './night-act';

@NgModule({
  declarations: [
    NightActPage,
  ],
  imports: [
    IonicPageModule.forChild(NightActPage),
  ],
})
export class NightActPageModule {}
