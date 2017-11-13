import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Act1Page } from '../act1/act1';

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
      this.navCtrl.push(Act1Page, {
        dino_color: color
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizePage');
  }

}
