import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, id: string, text: string, image: string, options: Array<{title: string,id: string}>}>;
  currentPage;
  sendFeedback;
  find_next_page;
  lastPage;

  constructor(public navCtrl: NavController) {
    this.pages = [
    {
      title:"The Zebrasaur",
      id:"0",
      text:"The zebrasaur is a mythical creature that is half zebra, half lion",
      image:"../assets/images/kitchen.png",
      options: [{title:"Diet", id:"1"},{title:"Mating",id:"2"}],
    },
    {
      title:"Zebrasaur Diet",
      id:"1",
      text:"The zebrasaur diet consists mainly of kosher sasquatch.",
      image:"../assets/images/jewish_sasquatch.jpeg",
      options: [{title:"Mating",id:"2"},{title:"First Page",id:"0"}],
    },
    {
      title:"Zebrasaur Mating Patterns",
      id:"2",
      text:"Zebrasaurs mate during the harvest moon.",
      image:"../assets/images/harvest_moon.jpeg",
      options: [{title:"Diet", id:"1"},{title:"First Page",id:"0"}],
    }
    ];

    this.currentPage = this.pages[0];
    this.lastPage = this.pages[0];

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
  }



}
