import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NightPage } from '../night/night';


/**
 * Generated class for the CandyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candy',
  templateUrl: '../act.html',
})
export class CandyPage {

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
        title: "CandyDad",
        id: "candy1",
        text: "Once Rowlf finished his drawing, his Dada came into the bedroom",
        image: "kitchen",
        options: [{ title: "Next..", id: "candy2", location: "row3>col1", style: "right" }],
        options_delay: 3,
        characters: [
          { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
          { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
        ],
        dialogue: [
          { text: "Hey Rowlf, I heard you were a good boy today and only ate two cookies..", location: "row1>col3", owner: "father", delay: 1 },
          {text: "Yes Dada! I ate only two cookies!", location: "row1>col3", owner: "child", delay: 1 }
        ]
      },

      {
        title: "CandyDad",
        id: "candy2",
        text: "",
        image: "kitchen",
        options: [
          { title: "Next..", id: "candy3", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
          { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
          { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
        ],
        dialogue: [
          { text: "Well, let's go to the Candy shop to get you some candies..", location: "row1>col3", owner: "father", delay: 1 },
          {text: "Really Dada??? Yay!", location: "row1>col3", owner: "child", delay: 1 }
        ]
      },

      {
        title: "CandyDad",
        id: "candy3",
        text: "Rowlf and Dad drove to the candy store and Rowlf is excited to buy his favourite candy.",
        image: "kitchen",
        options: [
          { title: "Chocolate!", id: "candyChoco", location: "row3>col1", style: "right" },
          { title: "Gummy Bear!", id: "candyGummy", location: "row3>col1", style: "right" },
          { title: "Sour Bomb!", id: "candyBomb", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
          { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
          { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
        ],
        dialogue: [
          { text: "So what candy do you want Rowlf?", location: "row1>col3", owner: "father", delay: 1 }
        ]
      },

      {
        title: "CandyDad",
        id: "candyChoco",
        text: "",
        image: "kitchen",
        options: [
          { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
        ],
        dialogue: [
        ]
      },

      {
        title: "CandyDad",
        id: "candyGummy",
        text: "",
        image: "backyard",
        options: [
          { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
        ],
        dialogue: [
        ]
      },

      {
        title: "CandyDad",
        id: "candySour",
        text: "",
        image: "LivingRoom",
        options: [
          { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
        ],
        dialogue: [
        ]
      },

      {
        title: "CandyDad",
        id: "candyend",
        text: "",
        image: "kitchen",
        options: [
          { title: "Next..", id: "candydinner", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
        ],
        dialogue: [
          { text: "Well let'g go home and have dinner.", location: "row1>col3", owner: "father", delay: 1 }
        ]
      },

      {
        title: "CandyDad",
        id: "candydinner",
        text: "Rowlf and his parents have dinner, and after a long day Momma and Dada put Rowlf to bed..",
        image: "kitchen",
        options: [
          { title: "Next..", id: "next", location: "row3>col1", style: "right" }
        ],
        options_delay: 3,
        characters: [
        ],
        dialogue: [
          { text: "", location: "row1>col3", owner: "father", delay: 1 }
        ]
      },
    ];

    this.currentPage = this.pages[0];
    this.events.publish('opened', this.currentPage);
    this.events.subscribe('next_page', (currentPage) => {
      this.currentPage = currentPage;
    });
  }

  sendFeedback(id) {
    this.events.publish('buttonClick', id, this.pages, NightPage, this.dino_color, this.ache);
  }

  goHome() {
    this.events.publish('buttonClick', 'next', this.pages, HomePage, null, null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandyPage');
  }

}