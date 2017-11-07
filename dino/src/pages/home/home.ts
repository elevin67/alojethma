import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string, location: string, style: string}>, characters: Array<{image: string, style: string, location: string}>, dialogue: Array<{text: string, location: string, owner: string}>}>;
  currentPage;
  sendFeedback;
  find_page;
  lastPage;
  add_character;
  add_characters_to_page;
  screen_height = screen.height;
  screen_width = screen.width;

  constructor(public navCtrl: NavController) {
    this.pages = [
    {
      title:"The Zebrasaur",
      id:"0",
      text:"This is the first page.\n jdnfihebfoeinjxe \n kniebuiebfuoenfuenjdfneinc ejfoiuebcuieygiuygyugyuyugyugyuguygygygogouyguyguygyugyugyuguygyuguygyugyugyug",
      image:"kitchen",
      options: [{title:"Diet", id:"1", location:"row2>col2", style:"left"},{title:"Mating",id:"2",location:"row2>col2", style:"right"},{title:"Page 3",id:"2", location:"row3>col2", style:"left"},{title:"Page 4",id:"1", location:"row3>col2", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"},
      {image:"../assets/images/mother.png", style:"parent", location:"row2>col3"}],
      dialogue: [{text:"I'm a super duper child. Like really really really really really really really really super.",location:"row2>col1",owner:"child"},{text:"I'm a mom",location:"row1>col3",owner:"parent"}]
    },
    {
      title:"Zebrasaur Diet",
      id:"1",
      text:"",
      image:"kitchen",
      options: [{title:"Mating",id:"2",location:"row2>col2", style:"left"},{title:"First Page",id:"0",location:"row2>col2", style:"right"},
      {title:"Option 3",id:"2",location:"row3>col2", style:"left"},{title:"Option 4",id:"0",location:"row3>col2", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col3"},
      {image:"../assets/images/father.png",style:"parent", location:"row2>col1"}],
      dialogue: []
    },
    {
      title:"Zebrasaur Mating Patterns",
      id:"2",
      text:"Zebrasaurs mate during the harvest moon.",
      image:"kitchen",
      options: [{title:"Diet", id:"1",location:"row2>col2", style:"left"},{title:"First Page",id:"0",location:"row2>col2", style:"right"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"}],
      dialogue: []
    }
    ];

    this.sendFeedback = function (id) {
      this.next_page_index = this.find_page(id);
      this.currentPage = this.pages[this.next_page_index];
    }

    this.find_page = function (id) {
      for (let i = 0; i < this.pages.length; i++) {
        if(this.pages[i].id == id) {
          return i;
        }
      }
      return false;
    }

    this.currentPage = this.pages[0];
  }

}
