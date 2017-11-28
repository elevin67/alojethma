import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DrawActPage } from '../draw-act/draw-act';

/**
 * Generated class for the TruthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truth',
  templateUrl: '../truth/truth.html',
})
export class TruthPage {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string}>, options_delay: number, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text:string, location:string, owner:string, delay:number}>}>;
  currentPage;
  dino_color;
  character_path;
  ache: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.dino_color = this.navParams.get('dino_color');
    this.ache = this.navParams.get('ache');
    this.character_path = "../assets/images/"+this.dino_color;
    this.pages = [


    { //index 0
      title:"Rowlf_Truth",
      id:"A01",
      text:"Mom comes back to the kitchen.",
      image:"kitchen",
      options: [
        {title:"Next..", id:"A011", location:"row3>col1", style:"right"}
      ],
      options_delay: 3,
      characters: [
        {image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},
        {image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}
      ],
      dialogue: [{text:"Hey bud, how many cookies did you eat?",location:"row1>col3",owner:"mother", delay:1}]
    },
    {
      title:"Rowlf_Truth",
      id:"A011",
      text:"",
      image:"kitchen",
      options: [
        {title:"Next..", id:"A012", location:"row2>col1", style:"left"}
      ],
      options_delay: 3,
      characters: [
        {image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},
        {image:this.character_path+"/motherBlink.gif", style:"mother", location:"row2>col3"}
      ],
      dialogue: [{text:"Only two!",location:"row2>col2",owner:"child", delay:2}],
    },

    {
      title:"Rowlf_Truth",
      id:"A012",
      text:"Mom was happy that Rowlf only ate 2.",
      image:"kitchen",
      options: [{title:"Next..", id:"A013", location:"row2>col1", style:"left"}],
      options_delay: 3,
      characters: [
        {image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},
        {image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}
      ],
      dialogue: [
        {text:"Very well, Rowlf! You did not eat too many! Well, do you want to go finish up the drawing that you have to turn it for Mr. Rex’s class tomorrow?",location:"row1>col3",owner:"mother", delay:2}
      ],
    },

    { //index 3
      title:"Rowlf_Stays",
      id:"A013",
      text:"",
      image:"kitchen",
      options: [
        {title:"Next..", id:"next", location:"row2>col3", style:"right"}
      ],
      options_delay: 3,
      characters: [
        {image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},
        {image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}
      ],
      dialogue: [{text:"Yes!!",location:"row1>col2",owner:"child", delay:2}],
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
    this.events.publish('buttonClick', id, this.pages, DrawActPage, this.dino_color, this.ache);
    }

    goHome() {
    this.events.publish('buttonClick', 'next', this.pages, HomePage, null, null);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruthPage');
  }

}
