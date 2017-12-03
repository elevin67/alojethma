import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalizePage } from '../personalize/personalize';
import { LiePage } from '../lie/lie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  openStory;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.openStory = function() {
      this.navCtrl.push(PersonalizePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
