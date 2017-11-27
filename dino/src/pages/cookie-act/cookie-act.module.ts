import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookieActPage } from './cookie-act';

@NgModule({
  declarations: [
    CookieActPage,
  ],
  imports: [
    IonicPageModule.forChild(CookieActPage),
  ],
})
export class CookieActPageModule {}
