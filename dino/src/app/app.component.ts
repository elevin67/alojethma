import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Act1Page } from '../pages/act1/act1';
import { PersonalizePage } from '../pages/personalize/personalize';
import {Ache1Page} from '../pages/ache1/ache1';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = HomePage;
  //find_page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.events.subscribe('buttonClick',(id, pages, component) => {
      console.log("clicked");
      this.sendFeedback(id, pages, component);
    });

    this.events.subscribe('opened', (currentPage) => {
      console.log("opened");
      this.reveal_delayed(currentPage);
    })
  }

  sendFeedback (id, pages, component) {
    if(id=='next') {
      this.navCtrl.push(component, {
        dino_color: 'green'
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


  reveal_delayed (currentPage) {
    // reveals the options
    var options = document.getElementsByClassName('options') as HTMLCollectionOf<HTMLElement>;
    setTimeout(function(){
      for (let i = 0; i < options.length; i++) {
        options[i].style.visibility = "visible";
      }
    }, currentPage.options_delay * 1000);

    // reveals dialogues
    var dialogue_delay0, dialogue_delay1, dialogue_delay2;
    var dialogue_id0, dialogue_id1, dialogue_id2;

    for (let i = 0; i < currentPage.dialogue.length; i++) {
      if(i == 0) {
        dialogue_delay0 = currentPage.dialogue[i].delay;
        dialogue_id0 = currentPage.dialogue[i].owner;
      } else if(i == 1) {
        dialogue_delay1 = currentPage.dialogue[i].delay;
        dialogue_id1 = currentPage.dialogue[i].owner;
      } else if(i == 2) {
        dialogue_delay2 = currentPage.dialogue[i].delay;
        dialogue_id2 = currentPage.dialogue[i].owner;
      }
    }

    if(dialogue_id0 != null) {
      setTimeout(function() {
        document.getElementById(dialogue_id0).style.visibility = "visible";
      }, dialogue_delay0 * 1000);
    }
    if(dialogue_id1 != null) {
      setTimeout(function() {
        document.getElementById(dialogue_id1).style.visibility = "visible";
      }, dialogue_delay1 * 1000);
    }
    if(dialogue_id2 != null) {
      setTimeout(function() {
        document.getElementById(dialogue_id2).style.visibility = "visible";
      }, dialogue_delay2 * 1000);
    }
  }
}
