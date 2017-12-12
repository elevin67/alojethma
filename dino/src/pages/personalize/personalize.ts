import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CookieActPage } from '../cookie-act/cookie-act';
import { NightPage } from '../night/night';
<<<<<<< HEAD
import { Ache1Page } from '../ache1/ache1';
=======
import { DrawActPage } from '../draw-act/draw-act';

>>>>>>> 953eb05f7272beca0c57a3e092c05b397d4e1f9d
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
<<<<<<< HEAD
      this.navCtrl.push(Ache1Page, {
=======
      this.navCtrl.push(DrawActPage, {
>>>>>>> 953eb05f7272beca0c57a3e092c05b397d4e1f9d
        dino_color: color
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizePage');
  }

}
