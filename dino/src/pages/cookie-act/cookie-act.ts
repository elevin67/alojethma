import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LiePage } from '../lie/lie';
import { TruthPage } from '../truth/truth';

/**
 * Generated class for the CookieActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookie-act',
  templateUrl: '../act.html',
})
export class CookieActPage {

  pages: Array<{
    title: string,
    id: string,
    text: string,
    image: string,
    characters: Array<{image: string, style: string, location: string}>,
    dialogue: Array<{text: string, location: string, owner: string, delay: number}>,
    options: Array<{title: string, id: string, location: string, style: string}>,
    options_delay: number
  }>;
  currentPage;
  dino_color;
  character_path;
  ache: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.dino_color = this.navParams.get('dino_color');
    this.character_path = "./assets/images/"+this.dino_color;
    this.pages = [
      // Cookie1
      {
        title: "Cookie1a",
        id: "cookie1a",
        text: "It is a lovely Sunday afternoon and Rowlf is playing in his backyard.",
        image: "backyard",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col2"},
          {image: "./assets/images/sun.gif", style: "sun", location: "row1>col3"}
        ],
        dialogue: [],
        options: [
          {title: 'Next', id: 'cookie1b', location: 'row2>col3', style: 'left'}
        ],
        options_delay: 1
      },
      {
        title: "Cookie1b",
        id: "cookie1b",
        text: "Suddenly, he hears his mommy calling out for him from inside...",
        image: "backyard",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col2"},
          {image: "./assets/images/sun.gif", style: "sun", location: "row1>col3"}
        ],
        dialogue: [
          {text: "Rowlf, can you come to the kitchen please?", location: "row1>col1", owner: "parent", delay: 1},
        ],
        options: [
          {title: 'Next', id: 'cookie1c', location: 'row2>col3', style: 'left'}
        ],
        options_delay: 2
      },
      {
        title: "Cookie1c",
        id: "cookie1c",
        text: "Should Rowlf go in?",
        image: "backyard",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col2"},
          {image: "./assets/images/sun.gif", style: "sun", location: "row1>col3"}
        ],
        dialogue: [],
        options: [
          {title: 'Yes', id: 'cookie2a', location: 'row2>col1', style: 'right'},
          {title: 'No', id: 'cookie1d', location: 'row2>col3', style: 'left'}
        ],
        options_delay: 1
      },
      {
        title: "Cookie1d",
        id: "cookie1d",
        text: "Rowlf decides not to go in and ignores his mom. But his mommy calls out again...",
        image: "backyard",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col2"},
          {image: "./assets/images/sun.gif", style: "sun", location: "row1>col3"}
        ],
        dialogue: [
          {text: "Rowlf honey??", location: "row1>col1", owner: "mother", delay: 1}
        ],
        options: [
          {title: 'Next', id: 'cookie2a', location: 'row2>col3', style: 'left'}
        ],
        options_delay: 1
      },
      // Cookie2
      {
        title: "Cookie2a",
        id: "cookie2a",
        text: "",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"}
        ],
        dialogue: [
          {text: "You called, mommy?", location: "row2>col1", owner: "child", delay: 1},
          {text: "Hey bud! You must be tired from all that playing outside?", location: "row1>col3", owner: "mother", delay: 2},
        ],
        options: [
          {title: 'Yeah, I\'m pretty tired', id: 'cookie2b', location: 'row3>col2', style: 'left'},
          {title: 'No, I\'m feeling okay!', id: 'cookie2c', location: 'row3>col2', style: 'right'},
        ],
        options_delay: 3
      },
      {
        title: "Cookie2b",
        id: "cookie2b",
        text: "",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"}
        ],
        dialogue: [
          {text: "Well that's good! I made cookies for you, would you like some?", location: "row1>col3", owner: "mother", delay: 1},
        ],
        options: [
          {title: 'No, I\'m not hungry', id: 'cookie2d', location: 'row2>col2', style: 'left'},
          {title: 'Maybe... What kind?', id: 'cookie2d', location: 'row2>col2', style: 'right'},
          {title: 'Yes!!!', id: 'cookie3a', location: 'row3>col2', style: 'right'}
        ],
        options_delay: 3
      },
      {
        title: "Cookie2c",
        id: "cookie2c",
        text: "",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"}
        ],
        dialogue: [
          {text: "Oh I bet you would like some cookies then?", location: "row1>col3", owner: "mother", delay: 1},
        ],
        options: [
          {title: 'No not really', id: 'cookie2d', location: 'row3>col2', style: 'left'},
          {title: 'Yes please!!', id: 'cookie3a', location: 'row3>col2', style: 'right'},
        ],
        options_delay: 3
      },
      {
        title: "Cookie2d",
        id: "cookie2d",
        text: "",
        image: "dinoB",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"},
          {image: './assets/images/cookie.png', style: 'cookie', location: "row3>col2"}
        ],
        dialogue: [
          {text: "What about chocolate chip cookies??", location: "row1>col3", owner: "mother", delay: 1},
          {text: "Hmmm...", location: "row2>col1", owner: "child", delay: 3}
        ],
        options: [
          {title: 'Next', id: 'cookie2e', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 5
      },
      {
        title: "Cookie2e",
        id: "cookie2e",
        text: "Rowlf decides he really does want some cookies",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"}
        ],
        dialogue: [
          {text: "Okay I'll take some cookies!", location: "row2>col1", owner: "child", delay: 1}
        ],
        options: [
          {title: 'Next', id: 'cookie3a', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 3
      },
      // Cookie3
      {
        title: "Cookie3a",
        id: "cookie3a",
        text: "Mommy brings out the cookies. They smell so good!",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: this.character_path+"/motherBlink.gif", style: "mother", location: "row2>col3"},
          {image: './assets/images/cookieFull.png', style: 'cookieTray', location: 'row3>col2'},
        ],
        dialogue: [
          {text: "Now don't eat all of them at once! You may get a tummy ache...", location: "row1>col3", owner: "mother", delay: 2},
        ],
        options: [
          {title: 'Next', id: 'cookie3b', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 3
      },
      {
        title: "Cookie3b",
        id: "cookie3b",
        text: "Mommy leaves. Rowlf eats a cookie, and another one, and another one...",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: './assets/images/cookieTray.gif', style: 'cookieTray', location: 'row3>col2'},
        ],
        dialogue: [],
        options: [
          {title: 'Next', id: 'cookie3c', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 3
      },
      {
        title: "Cookie3c",
        id: "cookie3c",
        text: "There are only two cookies left...",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: './assets/images/cookie2.png', style: 'cookieTray', location: 'row3>col2'},
        ],
        dialogue: [
          {text: "Should I eat one more?", location: "row2>col1", owner: "child", delay: 2},
        ],
        options: [
          {title: 'Just one more...', id: 'cookie3e', location: 'row2>col2', style: 'left'},
          {title: 'No I shouldn\'t', id: 'cookie3d', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 4
      },
      { // leads to TRUTH
        title: "Cookie3d",
        id: "cookie3d",
        text: "",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
        ],
        dialogue: [
          {text: "Mommy said my tummy would hurt. I'm done eating cookies", location: "row2>col1", owner: "child", delay: 2},
        ],
        options: [
          {title: 'Next', id: 'next', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 4
      },
      {
        title: "Cookie3e",
        id: "cookie3e",
        text: "Now there is only one cookie left... Mommy said not to eat all the cookies!",
        image: "kitchen",
        characters: [
          {image: this.character_path+"/childBlink.gif", style: "child", location: "row3>col1"},
          {image: './assets/images/cookie1.png', style: 'cookieTray', location: 'row3>col2'},
        ],
        dialogue: [
          {text: "I kind of want that last cookie... What should I do?", location: "row2>col1", owner: "child", delay: 2},

        ],
        options: [
          // leads to LIE
          {title: 'Finish them!!', id: 'next', location: 'row2>col2', style: 'left'},
          {title: 'I won\'t eat it', id: 'cookie3d', location: 'row2>col2', style: 'right'},
        ],
        options_delay: 4
      },
    ];

    this.currentPage = this.pages[0];
    this.events.publish('opened', this.currentPage);
    this.events.subscribe('next_page', (currentPage) => {
      this.currentPage = currentPage;
    });
  }

  // called whenever an option button is clicked
  sendFeedback (id) {
    var component;
    if(this.currentPage.id != 'next') {
      if(this.currentPage.id == 'cookie3d') {
        // then it's TRUTH
        this.ache = false;
        component = TruthPage;
      } else {
        // otherwise it's LIE
        this.ache = true;
        component = LiePage;
      }
    }
    this.events.publish('buttonClick', id, this.pages, component, this.dino_color, this.ache);
  }

  goHome() {
    this.events.publish('buttonClick', 'home', this.pages, HomePage, null, null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookieActPage');
  }

}
