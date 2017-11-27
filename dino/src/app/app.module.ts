import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Screenshot } from '@ionic-native/screenshot';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Act1Page } from '../pages/act1/act1';
import { PersonalizePage } from '../pages/personalize/personalize';

import {Ache1Page} from '../pages/ache1/ache1';

import { DrawActPage } from '../pages/draw-act/draw-act';
import { CookieActPage } from '../pages/cookie-act/cookie-act';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Act1Page,
    PersonalizePage,
    Ache1Page,
    DrawActPage,
    CookieActPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Act1Page,
    PersonalizePage,
    Ache1Page,
    DrawActPage,
    CookieActPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
