import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CookieActPage } from '../cookie-act/cookie-act';
import { NightPage } from '../night/night';
import { DrawActPage } from '../draw-act/draw-act';

@IonicPage()
@Component({
  selector: 'page-personalize',
  templateUrl: 'personalize.html',
})
export class PersonalizePage {
  startStory;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startStory = function(color) {
      console.log(color);
      this.navCtrl.setRoot(CookieActPage, {
        dino_color: color
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizePage');
  }

}
