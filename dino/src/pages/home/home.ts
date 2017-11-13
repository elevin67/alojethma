import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Act1Page } from '../act1/act1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  openAct1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.openAct1 = function() {
      this.navCtrl.push(Act1Page);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
