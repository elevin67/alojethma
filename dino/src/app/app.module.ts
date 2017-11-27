import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Screenshot } from '@ionic-native/screenshot';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonalizePage } from '../pages/personalize/personalize';

import {Ache1Page} from '../pages/ache1/ache1';
import { TruthPage } from '../pages/truth/truth';
import { LiePage } from '../pages/lie/lie';
import { DrawActPage } from '../pages/draw-act/draw-act';
import { CookieActPage } from '../pages/cookie-act/cookie-act';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalizePage,
    Ache1Page,
    DrawActPage,
    CookieActPage,
    TruthPage,
    LiePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonalizePage,
    Ache1Page,
    DrawActPage,
    CookieActPage,
    TruthPage,
    LiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
