import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-night',
  templateUrl: '../act.html',
})
export class NightPage {

  pages: Array<{
    title: string,
    id: string,
    text: string,
    image: string,
    characters: Array<{ image: string, style: string, location: string }>,
    dialogue: Array<{ text: string, location: string, owner: string, delay: number }>,
    options: Array<{ title: string, id: string, location: string, style: string }>,
    options_delay: number
  }>;
  currentPage;
  dino_color;
  character_path;
  ache: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.dino_color = this.navParams.get('dino_color');
    this.character_path = "../assets/images/" + this.dino_color;
    this.pages = [
      {
        title: "Night",
        id: "night1",
        text: "After finishing dinner, Rowlf is very tired. He goes back to his room.",
        image: "bedroom",
        options: [{ title: "Next", id: "night2", location: "row3>col1", style: "right" }],
        options_delay: 3,
        characters: [
          { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
          { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" },
          { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col1"}
        ],
        dialogue: [
          { text: "Ok, bud, off yo go to sleep..", location: "row1>col3", owner: "father", delay: 1 }
        ]
      },

      {
        title: "Night",
        id: "night2",
        text: "",
        image: "bedroom",
        options: [{ title: "I love you both", id: "sleep", location: "row3>col1", style: "right" }],
        options_delay: 3,
        characters: [
          { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
          { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" },
          { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col1"}
        ],
        dialogue: [
          { text: "I love you Momma. I love you Dada.", location: "row1>col3", owner: "child", delay: 1 },
          { text: "Oh hon, we both love you too.", location: "row1>col1", owner: "mother", delay: 1 }
        ]
      },
      {
        title: "SleepingRowlf",
        id: "sleep",
        text: "",
        image: "dinoB",
        options: [],
        options_delay: 3,
        characters: [],
        dialogue: []
      },
    ];

    this.currentPage = this.pages[0];
    this.events.publish('opened', this.currentPage);
    this.events.subscribe('next_page', (currentPage) => {
      this.currentPage = currentPage;
    });
  }

  sendFeedback(id) {
    this.events.publish('buttonClick', id, this.pages, HomePage, this.dino_color, this.ache);
  }

  goHome() {
    this.events.publish('buttonClick', 'home', this.pages, HomePage, null, null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NightPage');
  }

}
