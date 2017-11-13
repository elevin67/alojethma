import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalizePage } from './personalize';

@NgModule({
  declarations: [
    PersonalizePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalizePage),
  ],
})
export class PersonalizePageModule {}
