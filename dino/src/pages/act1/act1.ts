import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Act2Page } from '../act2/act2';

@Component({
  selector: 'page-act1',
  templateUrl: 'act1.html'
})
@IonicPage()
export class Act1Page {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string}>, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text:string, location:string, owner:string, delay:number}>}>;
  currentPage;
  sendFeedback;
  find_page;
  lastPage;
  add_character;
  add_characters_to_page;
  screen_height = screen.height;
  screen_width = screen.width;
  reveal_delayed;
  next_act;

  constructor(public navCtrl: NavController) {
    this.pages = [

    { //index 0
      title:"Rowlf_Play1",
      id:"A0F1",
      text:"It's a lovely Sunday afternoon and Rowlf, the baby dinosaur is playing in his backyard...",
      image:"backyard",
      options: [{title:"Next..", id:"A0F2", location:"row2>col3", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col1"}],
      dialogue: [],
    },

    { //index 1
      title:"Rowlf_Play2",
      id:"A0F2",
      text:"\"Rowlf\"... calls his Mommy from the kitchen.",
      image:"backyard",
      options: [{title:"Next..", id:"A0F3", location:"row2>col3", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col3"}],
      dialogue: [],
    },

    { //index 2
      //options
      title:"Rowlf_Play3",
      id:"A0F3",
      text:"\"Rowlf....\"",
      image:"backyard",
      options: [{title:"Yes!", id:"A01", location:"row2>col3", style:"right"},{title:"No..", id:"A02", location:"row3>col3", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row2>col1"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col2"}],
      dialogue: [{text:"Should I go in?",location:"row1>col1",owner:"child", delay:2}],
    },

    { //index 3
      title:"Rowlf_Stays",
      id:"A02",
      text:"\"Rowlf, honey...\", Mommy calls out again\.",
      image:"backyard",
      options: [{title:"Next..", id:"A01", location:"row2>col3", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row2>col2"},{image:"../assets/images/ball.gif", style:"ball", location:"row3>col1"}],
      dialogue: [{text:"Hmm... I should go inside and see why Mommy is calling me..",location:"row1>col2",owner:"child", delay:3}],
    },

    { //index 4
      title:"Rowlf_Goes_in",
      id:"A01",
      text:"",
      image:"kitchen",
      options: [{title:"Ummm... Yeah", id:"A011", location:"row2>col2", style:"left"},{title:"No.. not really", id:"A012", location:"row3>col2", style:"left"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"},{image:"../assets/images/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Hey bud, are you tired after playing all afternoon?",location:"row1>col3",owner:"mother", delay:1}]
    },

    { //index 5
      title:"Rowlf_Goes_in",
      id:"A011",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"next", location:"row3>col1", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col2"},{image:"../assets/images/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"I bet you would love some cookies then!",location:"row1>col3",owner:"mother", delay:1}],
    },

    { //index 6
      title:"Rowlf_Goes_in",
      id:"A012",
      text:"",
      image:"kitchen",
      options: [{title:"Next..", id:"next", location:"row3>col1", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col2"},{image:"../assets/images/mother.png", style:"mother", location:"row2>col3"}],
      dialogue: [{text:"Oh, that's great!! Well, I was wondering if you would you like some cookies?",location:"row1>col3",owner:"mother", delay:1}],
    },
    ];

    this.sendFeedback = function (id) {
      console.log(id);
      if(id == 'next') {
        console.log('okay?');
        this.navCtrl.setRoot(Act2Page);
        return;
      }
      console.log('alright');
      this.next_page_index = this.find_page(id);
      this.currentPage = this.pages[this.next_page_index];
      this.reveal_delayed();
    }

    this.find_page = function (id) {
      for (let i = 0; i < this.pages.length; i++) {
        if(this.pages[i].id == id) {
          return i;
        }
      }
      return false;
    }

    this.reveal_delayed = function () {
      var options = document.getElementsByClassName('options') as HTMLCollectionOf<HTMLElement>;
      setTimeout(function(){
        for (let i = 0; i < options.length; i++) {
          options[i].style.visibility = "visible";
        }
      },4000);

      var dialogue_delay0, dialogue_delay1, dialogue_delay2;
      var dialogue_id0, dialogue_id1, dialogue_id2;

      for (let i = 0; i < this.currentPage.dialogue.length; i++) {
        if(i == 0) {
          dialogue_delay0 = this.currentPage.dialogue[i].delay;
          dialogue_id0 = this.currentPage.dialogue[i].owner;
        } else if(i == 1) {
          dialogue_delay1 = this.currentPage.dialogue[i].delay;
          dialogue_id1 = this.currentPage.dialogue[i].owner;
        } else if(i == 2) {
          dialogue_delay2 = this.currentPage.dialogue[i].delay;
          dialogue_id2 = this.currentPage.dialogue[i].owner;
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

      // for loop over all dialogue items doesn't work because timeout causes dialogue_delay
      // and dialogue_id to move to the next index before function is executed
      // leaving in code just in case

      // for (let i = 0; i < this.currentPage.dialogue.length; i++) {
      //   var dialogue_delay = this.currentPage.dialogue[i].delay;
      //   var dialogue_id = this.currentPage.dialogue[i].owner;
      //   setTimeout(function() {
      //     document.getElementById(dialogue_id).style.visibility = "visible";
      //   }, dialogue_delay * 1000);
      // }
    }

    this.currentPage = this.pages[0];
    this.reveal_delayed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Act1Page');
  }

}
