import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PersonalizePage } from '../pages/personalize/personalize';
import {Ache1Page} from '../pages/ache1/ache1';
import { TruthPage } from '../pages/truth/truth';
import { LiePage } from '../pages/lie/lie';
import { DrawActPage } from '../pages/draw-act/draw-act';
import { CookieActPage } from '../pages/cookie-act/cookie-act';
import { CandyPage } from '../pages/candy/candy';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = DrawActPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.events.subscribe('buttonClick',(id, pages, component, dino_color, ache) => {
      if(id == 'home') {
        this.homePrompt();
      } else {
        this.sendFeedback(id, pages, component, dino_color, ache);
      }
    });

    this.events.subscribe('opened', (currentPage) => {
      console.log('opened event');
      this.reveal_delayed(currentPage);
    });
  }

  sendFeedback (id, pages, component, dino_color, ache) {
    if(id=='next') {
      this.navCtrl.push(component, {
        dino_color: dino_color,
        ache: ache
      });
      return;
    }
    let next_page_index = this.find_page(id,pages);
    let currentPage = pages[next_page_index];
    this.events.publish('next_page',currentPage);
    this.reveal_delayed(currentPage);
  }

  find_page = function(id, pages) {
    for (let i = 0; i < pages.length; i++) {
      if(pages[i].id == id) {
        return i;
      }
    }
    return;
  };

  homePrompt() {
    let alert = this.alertCtrl.create({
      title: 'Home',
      message: 'Do you really want to exit the story and return to the home page?',
      buttons: [
        {
          text: 'Yes',
          role: 'yes',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

  reveal_delayed (currentPage) {
    // reveals the options
    // don't use document
    // use currentPage
    var options = document.getElementsByClassName('options') as HTMLCollectionOf<HTMLElement>;
    setTimeout(function(){
      for (let i = 0; i < options.length; i++) {
        options[i].style.visibility = "visible";
      }
    }, currentPage.options_delay * 1000);

    // reveals dialogues
    for (let i = 0; i < currentPage.dialogue.length; i++) {
      let dialogue_delay = currentPage.dialogue[i].delay;
      let dialogue_id = currentPage.dialogue[i].owner;
      setTimeout(function() {
        if(document.getElementById(dialogue_id) != null) {
          document.getElementById(dialogue_id).style.visibility = "visible";
        }
      }, dialogue_delay * 1000);
    }

  }
}
