import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string, moral_index: number}>, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text:string, location:string, owner:string, delay:number}>, weight:number}>;
  moral_array = [];
  currentPage;
  sendFeedback;
  find_page;
  lastPage;
  add_character;
  add_characters_to_page;
  screen_height = screen.height;
  screen_width = screen.width;
  reveal_delayed;

  constructor(public navCtrl: NavController) {
    this.moral_array = [0,0,0,0];
    console.log(this.moral_array);
    this.pages = [
    {
      title:"The Zebrasaur",
      id:"0",
      text:"This is the first page.\n jdnfihebfoeinjxe \n kniebuiebfuoenfuenjdfneinc ejfoiuebcuieygiuygyugyuyugyugyuguygygygogouyguyguygyugyugyuguygyuguygyugyugyug",
      image:"kitchen",
      options: [{title:"Diet", id:"1", location:"row2>col2", style:"left", moral_index:0},{title:"Mating",id:"2",location:"row2>col2", style:"right", moral_index:1},{title:"Page 3",id:"2", location:"row3>col2", style:"left",moral_index:2},{title:"Page 4",id:"1", location:"row3>col2", style:"right",moral_index:3}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"},
      {image:"../assets/images/mother.png", style:"parent", location:"row2>col3"}],
      dialogue: [{text:"I'm a super duper child. Like really really really really really really really really super.",location:"row2>col1",owner:"child", delay:1},{text:"I'm a mom",location:"row1>col3",owner:"mother",delay:3}],
      weight: 10
    },
    {
      title:"Zebrasaur Diet",
      id:"1",
      text:"",
      image:"backyard",
      options: [{title:"Mating",id:"2",location:"row2>col2", style:"left",moral_index:0},{title:"First Page",id:"0",location:"row2>col2", style:"right",moral_index:1},
      {title:"Option 3",id:"2",location:"row3>col2", style:"left",moral_index:1},{title:"Option 4",id:"0",location:"row3>col2", style:"right",moral_index:3}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col3"},
      {image:"../assets/images/father.png",style:"parent", location:"row2>col1"}],
      dialogue: [{text:"I'm a superb father.",location:"row1>col1",owner:"father", delay:1},{text:"I love dinosaurs.",location:"row2>col3",owner:"child",delay:3}],
      weight: 3
    },
    {
      title:"Zebrasaur Mating Patterns",
      id:"2",
      text:"Zebrasaurs mate during the harvest moon.",
      image:"kitchen",
      options: [{title:"Diet", id:"1",location:"row2>col2", style:"left",moral_index:0},{title:"First Page",id:"0",location:"row2>col2", style:"right",moral_index:2}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"}],
      dialogue: [],
      weight: 4
    }
    ];

    this.sendFeedback = function (id, moral_index) {
      this.next_page_index = this.find_page(id);
      console.log(this.moral_array);
      this.moral_array[moral_index] += this.currentPage.weight;
      console.log(this.moral_array);
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
      var options = document.getElementsByClassName('options') as HTMLCollectionOf<HTMLElement>;;
      setTimeout(function(){
        for (let i = 0; i < options.length; i++) {
          options[i].style.visibility = "visible";
        }
      },5000);

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
    // console.log(document.getElementsByClassName('dialogue_box'));
    // var elems = document.getElementsByClassName('dialogue_box');
    // setTimeout(function(){
    //   for (let i = 0; i < elems.length; i++) {
    //     elems[i].style.visibility = "visible";
    //   }
    // },3000);
    this.reveal_delayed();
  }

}
