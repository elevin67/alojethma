import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string}>, characters: Array<{image: string, style: string, location: string}>}>;
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
      options: [{title:"Diet", id:"1"},{title:"Mating",id:"2"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"},
      {image:"../assets/images/mother.png", style:"parent", location:"row2>col3"}]
    },
    {
      title:"Zebrasaur Diet",
      id:"1",
      text:"The zebrasaur diet consists mainly of kosher sasquatch.",
      image:"kitchen",
      options: [{title:"Mating",id:"2"},{title:"First Page",id:"0"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col3"},
      {image:"../assets/images/father.png",style:"parent", location:"row2>col1"}]
    },
    {
      title:"Zebrasaur Mating Patterns",
      id:"2",
      text:"Zebrasaurs mate during the harvest moon.",
      image:"kitchen",
      options: [{title:"Diet", id:"1"},{title:"First Page",id:"0"}],
      characters: [{image:"../assets/images/child.png", style:"child", location:"row3>col1"}]
    }
    ];

    this.sendFeedback = function (id) {
      this.next_page_index = this.find_page(id);
      this.lastPage = this.pages[this.find_page(this.currentPage.id)];
      console.log(this.lastPage.id);
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
    this.lastPage = this.pages[0];
  }

}
