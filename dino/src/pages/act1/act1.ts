import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-act1',
  templateUrl: '../act.html'
})
@IonicPage()
export class Act1Page {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string}>, options_delay: number, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text:string, location:string, owner:string, delay:number}>}>;
  currentPage;
  dino_color;
  character_path;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.dino_color = this.navParams.get('dino_color');
    console.log(this.dino_color);
    console.log(this.navParams.get('dino_color'));
    this.character_path = "../assets/images/"+this.dino_color;
    this.pages = [

    { //index 0
      title:"Rowlf_Play1",
      id:"A0F1",
      text:"It's a lovely Sunday afternoon and Rowlf, the baby dinosaur is playing in his backyard...",
      image:"backyard",
      options: [{title:"Next..", id:"A0F2", location:"row2>col3", style:"right"}],
      options_delay: 1,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col1"},{image:"../assets/images/sun.gif", style:"ball", location:"row1>col3"}],
      dialogue: [],
    },

    { //index 1
      title:"Rowlf_Play2",
      id:"A0F2",
      text:"\"Rowlf\"... calls his Mommy from the kitchen.",
      image:"backyard",
      options: [{title:"Next..", id:"A0F3", location:"row2>col3", style:"right"}],
      options_delay: 1,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col3"},{image:"../assets/images/sun.gif", style:"ball", location:"row1>col3"}],
      dialogue: [],
    },

    { //index 2
      //options
      title:"Rowlf_Play3",
      id:"A0F3",
      text:"\"Rowlf....\"",
      image:"backyard",
      options: [{title:"Yes!", id:"A01", location:"row2>col3", style:"right"},{title:"No..", id:"A02", location:"row3>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row2>col1"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col2"},{image:"../assets/images/sun.gif", style:"ball", location:"row1>col3"}],
      dialogue: [{text:"Should I go in?",location:"row1>col1",owner:"child", delay:2}],
    },

    { //index 3
      title:"Rowlf_Stays",
      id:"A02",
      text:"\"Rowlf, honey...\", Mommy calls out again\.",
      image:"backyard",
      options: [{title:"Next..", id:"A01", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col1"},{image:"../assets/images/sun.gif", style:"ball", location:"row1>col3"}],
      dialogue: [{text:"Hmm... I should go inside and see why Mommy is calling me..",location:"row1>col2",owner:"child", delay:2}],
    },

    { //index 4
      title:"Rowlf_Goes_in",
      id:"A01",
      text:"",
      image:"kitchen",
      options: [{title:"Ummm... Yeah", id:"A011", location:"row2>col2", style:"left"},{title:"No.. not really", id:"A012", location:"row3>col2", style:"left"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row3>col1"},{image:this.character_path+"/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Hey bud, are you tired after playing all afternoon?",location:"row1>col3",owner:"mother", delay:1}]
    },

    { //index 5
      title:"Rowlf_Goes_in",
      id:"A011",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"next", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row3>col2"},{image:this.character_path+"/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"I bet you would love some cookies then!",location:"row1>col3",owner:"mother", delay:1}],
    },

    { //index 6
      title:"Rowlf_Goes_in",
      id:"A012",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"next", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/child.png", style:"child", location:"row3>col2"},{image:this.character_path+"/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Oh, that's great!! Well, I was wondering if you would you like some cookies?",location:"row1>col3",owner:"mother", delay:1}],
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
    this.events.publish('buttonClick', id, this.pages, HomePage);
  }

  goHome() {
    this.events.publish('buttonClick', 'next', this.pages, HomePage);
  }

  // test to see if opened a page
  ionViewDidLoad() {
    console.log('ionViewDidLoad Act1Page');
  }

}
