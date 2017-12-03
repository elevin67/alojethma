import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightPage } from './night';

@NgModule({
  declarations: [
    NightPage,
  ],
  imports: [
    IonicPageModule.forChild(NightPage),
  ],
})
export class NightPageModule {}
