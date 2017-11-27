import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { DrawPage } from '../draw/draw';

/**
 * Generated class for the LiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
   selector: 'page-lie',
   templateUrl: '../lie/lie.html',
 })
@IonicPage()
export class LiePage {
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

    {
      title:"Rowlf_Lies",
      id:"A01",
      text:"Mom comes back to the kitchen.",
      image:"kitchen",
      options: [{title:"Next..", id:"A011", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Hey bud, how many cookies did you eat?",location:"row1>col3",owner:"child", delay:1}]
    },

    {
      title:"Rowlf_Lies",
      id:"A011",
      text:"Rowlf thinks about it for a while. 'I ate more than 2. But Mommy would be mad if I tell her that. What should I say?'",
      image:"kitchen",
      options: [{title:"Only 2", id:"A01A", location:"row2>col1", style:"left"},{title:"I ate 3 or 4 cookies.", id:"A01B", location:"row3>col1", style:"left"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [],
    },

    {
      title:"Rowlf_Lies",
      id:"A01A",
      text:"Rowlf lies.",
      image:"kitchen",
      options: [{title:"Next..", id:"A01AA", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"I only ate 2",location:"row1>col2",owner:"child", delay:2}],
    },
    {
      title:"Rowlf_Lies",
      id:"A01AA",
      text:"",
      image:"kitchen",
      options: [{title:"Yes", id:"A01AB", location:"row2>col1", style:"left"},{title:"I ate 3 or 4 cookies.", id:"A01AC", location:"row3>col1", style:"left"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Are you sure?",location:"row1>col3",owner:"child", delay:1}]
    },
    {
      title:"Rowlf_Lies",
      id:"A01AB",
      text:"Rowlf looks scared and lied as Mom glares at him",
      image:"kitchen",
      options: [{title:"Next..", id:"A01D", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Okay, if you say so",location:"row1>col3",owner:"child", delay:1}]
    },
    {
      title:"Rowlf_Lies",
      id:"A01AC",
      text:"Rowlf is scared and tells the truth.",
      image:"kitchen",
      options: [{title:"Next..", id:"A01D", location:"row3>col1", style:"right"}],
      options_delay: 4,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"So you lied to me before? Well, Rowlf, you should not lie. You ate so many cookies, what if your stomach hurts later now?",location:"row1>col3",owner:"child", delay:1}]
    },
    {
      title:"Rowlf_Lies",
      id:"A01B",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"A01C", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"I ate 3 or 4 cookies.",location:"row1>col2",owner:"child", delay:1}],
    },
    {
      title:"Rowlf_Lies",
      id:"A01C",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"A01D", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Rowlf! I told you not to eat a lot of cookies! You ate so many cookies, what if your stomach hurts later now?",location:"row1>col3",owner:"child", delay:1}],
    },
    {
      title:"Rowlf_Lies",
      id:"A01D",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"next", location:"row3>col1", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childblink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherblink.gif", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Well, I think you should go to your room and color your drawing, the one you have to turn in tomorrow for Mr. Rex’s class. ",location:"row1>col3",owner:"child", delay:1}],
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiePage');
  }

}
