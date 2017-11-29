import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Ache1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
   selector: 'page-ache1',
   templateUrl: '../act.html',
 })

@IonicPage()

export class Ache1Page {
  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string}>, options_delay: number, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text:string, location:string, owner:string, delay:number}>}>;
  currentPage;
  dino_color;
  character_path;
  ache: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    this.dino_color = this.navParams.get('dino_color');
    this.ache = this.navParams.get('ache');
    this.character_path = "../assets/images/"+this.dino_color;
    this.pages = [

    { //index 0
      title:"Rowlf_Pain1",
      id:"ache1a",
      text:"As Rowlf put the final touches to his wonderful drawing, he realized that his stomach was aching...",
      image:"backyard",
      options: [{title:"Next...", id:"ache1b", location:"row2>col3", style:"right"}],
      options_delay: 1,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},{image:"../assets/images/sun.gif", style:"ball", location:"row1>col3"}],
      dialogue: [{text:"\"Ow...\", Rowlf thinks to himself, \"my stomach really hurts!\"",location:"row1>col2",owner:"child", delay:2}],
    },

    { //index 1
      title:"Rowlf_Pain2",
      id:"ache1b",
      text:" Confused, Rowlf wonders if he should call his Mommy",
      image:"backyard",
      options: [{title:"Tell Mommy!", id:"ache1c", location:"row2>col3", style:"right"},{title:"Mommy doesn't need to know...", id:"ache1d", location:"row3>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/confusedChild.gif", style:"child", location:"row3>col2"}],
      dialogue: [{text:"Hmm...I wonder if Mommy would know what to do...",location:"row2>col2",owner:"child", delay:2}],
    },

    { //index 2
      //options
      title:"Rowlf_Pain4",
      id:"ache1d",
      text:"But Rowlf's stomach ache continues to get worse...",
      image:"backyard",
      options: [{title:"Call Mommy!", id:"ache1c", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"}],
      dialogue: [{text:"My stomach really hurts, I'd better tell Mommy!",location:"row2>col2",owner:"child", delay:2}],
    },

    { //index 3
      title:"Rowlf_Pain3",
      id:"ache1c",
      text:"Rowlf decides to call his Mommy for help. She comes in, looking worried.",
      image:"backyard",
      options: [{title:"Next", id:"ache1e", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"},{image:this.character_path+"/motherBlink.gif", style:"mother", location:"row2>col2"}],
      dialogue: [{text:"What is it, honey? What's wrong?",location:"row1>col2",owner:"child", delay:2}],
    },

    //NOT SURE WHERE DAD WILL BE IN THE FRAME POSITION WISE
    { //index 4
      title:"Rowlf_Pain5",
      id:"ache1e",
      text:"Unable to bear the pain, Rowlf starts to cry. Hearing Rowlf's cries, Dada comes into the room as well. He asks Mommy what is going on, and she explains.",
      image:"kitchen",
      options: [{title:"Next...", id:"ache1f", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherBlink.gif", style:"mother", location:"row2>col3"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col1"}],
      dialogue: [{text:"Rowlf ate too many chocolate chip cookies.The poor dear now has a stomach ache.",location:"row1>col3",owner:"child", delay:1}]
    },

    { //index 5
      title:"Rowlf_Pain6",
      id:"ache1f",
      text:"Dada tries to console Rowlf, and offers to go get some medicine.",
      image:"kitchen",
      options: [{title:"Next...", id:"ache1g", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherBlink.gif", style:"mother", location:"row3>col3"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col1"}],
      dialogue: [{text:"Don't cry, honey. I will go get some medicine and you will feel better in no time, eh?",location:"row1>col1",owner:"father", delay:1}],
    },

    { //index 6
      title:"Rowlf_Pain7",
      id:"ache1g",
      text:"However, Rowlf refuses to take the medicine even though his stomach ache continues to get worse.",
      image:"kitchen",
      options: [{title:"Next..", id:"ache1h", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col2"},{image:this.character_path+"/motherBlink.gif", style:"mother", location:"row3>col3"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col1"}],
      dialogue: [{text:"B-but I don't want medicine, Dada! It tastes really bad!",location:"row1>col2",owner:"child", delay:1}],
    },

    { //index 7
      title:"Rowlf_Pain8",
      id:"ache1h",
      text:"Mommy and Dada explain to Rowlf that if he takes the medicine, he would feel better in no time.",
      image:"kitchen",
      options: [{title:"Next..", id:"ache1i", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"},{image:this.character_path+"/motherBlink.gif", style:"mother", location:"row3>col2"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col3"}],
      dialogue: [{text:"Rowlf, honey, the medicine will really help the stomach ache go away and then maybe we can do something fun.",location:"row1>col3",owner:"mother", delay:1}],
    },

    { //index 8
      title:"Rowlf_Pain9",
      id:"ache1i",
      text:"",
      image:"kitchen",
      options: [{title:"Take the medcine", id:"ache1j", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"}],
      dialogue: [],
    },

    { //index 9
      title:"Rowlf_Pain10",
      id:"ache1j",
      text:"Rowlf decides to take the medicine, and soon, he starts to feel much better.",
      image:"kitchen",
      options: [{title:"Next", id:"ache1k", location:"row2>col3", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"}],
      dialogue: [{text:"Wow!My stomach ache is gone. I wonder if Dada will take me to the candy store now.",location:"row1>col3",owner:"mother", delay:1}],
    },

    { //index 10
      title:"Rowlf_Pain11",
      id:"ache1k",
      text:"Excited at the prospect of candy, Rowlf goes to Dada and asks him if they can go the candy store.",
      image: "living",
      options: [{title:"Next", id:"ache1l", location:"row2>col2", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col3"}],
      dialogue: [{text:"Dada! I don't feel sick anymore.You said you would take me to candy shop today.Let's go!",location:"row1>col1",owner:"child", delay:1}],
    },

    { //index 11
      title:"Rowlf_Pain12",
      id:"ache1l",
      text:"",
      image:"living",
      options: [{title:"Next", id:"ache1m", location:"row2>col2", style:"right"}],
      options_delay: 3,
      characters: [{image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"},{image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col3"}],
      dialogue: [{text:"I'm afraid we can't go today, kiddo. We don't want you to get a stomach ache again. How about we go some other day?",location:"row1>col3",owner:"father", delay:1}],
    },

    { //index 12
      title:"Rowlf_Pain13",
      id:"ache1m",
      text:"Dejected, Rowlf realizes he should not have eaten all the cookies. Dada notices Rowlf's sadness, and attempts to console him.",
      image:"living",
      options: [{title:"Next", id:"ache1n", location:"row2>col2", style:"right"}],
      options_delay: 3,
      characters: [
        {image:this.character_path+"/childBlink.gif", style:"child", location:"row3>col1"},
        {image:this.character_path+"/fatherBlink.gif", style:"father", location:"row3>col3"}
      ],
      dialogue: [
        {text:"Hey, kiddo, don't feel bad. Next time, just be careful to not eat all the cookies, eh? Let's go have some dinner now. I've made your favourite dish.",location:"row1>col3",owner:"father", delay:1}
      ],
    },



    { //index 14
      title:"Rowlf_Pain15",
      id:"ache1n",
      text:"Rowlf, Mommy and Dada enjoy a delicious dinner of mashed potatoes, baked chicken and green beans.",
      image:"kitchen",
      options: [{title:"Next", id:"next", location:"row2>col2", style:"right"}],
      options_delay: 3,
      characters: [],
      dialogue: [],
    },
    ];

    this.currentPage = this.pages[0];
    this.events.publish('opened', this.currentPage);
    this.events.subscribe('next_page', (currentPage) => {
      this.currentPage = currentPage;
    });

  }


  sendFeedback (id) {
    this.events.publish('buttonClick', id, this.pages, NightPage, this.dino_color, this.ache);
  }


  goHome() {
    this.events.publish('buttonClick', 'next', this.pages, HomePage, null, null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ache1Page');
  }

}
