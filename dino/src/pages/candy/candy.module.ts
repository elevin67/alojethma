import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandyPage } from './candy';

@NgModule({
  declarations: [
    CandyPage,
  ],
  imports: [
    IonicPageModule.forChild(CandyPage),
  ],
})
export class CandyPageModule {}
