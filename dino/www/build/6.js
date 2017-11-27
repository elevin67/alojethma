webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthPageModule", function() { return TruthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truth__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TruthPageModule = (function () {
    function TruthPageModule() {
    }
    return TruthPageModule;
}());
TruthPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__truth__["a" /* TruthPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__truth__["a" /* TruthPage */]),
        ],
    })
], TruthPageModule);

//# sourceMappingURL=truth.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DrawPage } from '../draw/draw';
/**
 * Generated class for the LiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiePage = (function () {
    function LiePage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        console.log(this.dino_color);
        console.log(this.navParams.get('dino_color'));
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Lies",
                id: "A01",
                text: "Mom comes back to the kitchen.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A011", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Hey bud, how many cookies did you eat?", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Lies",
                id: "A011",
                text: "Rowlf thinks about it for a while. 'I ate more than 2. But Mommy would be mad if I tell her that. What should I say?'",
                image: "kitchen",
                options: [{ title: "Only 2", id: "A01A", location: "row2>col1", style: "left" }, { title: "I ate 3 or 4 cookies.", id: "A01B", location: "row3>col1", style: "left" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [],
            },
            {
                title: "Rowlf_Lies",
                id: "A01A",
                text: "Rowlf lies.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01AA", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "I only ate 2", location: "row1>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Lies",
                id: "A01AA",
                text: "",
                image: "kitchen",
                options: [{ title: "Yes", id: "A01AB", location: "row2>col1", style: "left" }, { title: "I ate 3 or 4 cookies.", id: "A01AC", location: "row3>col1", style: "left" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Are you sure?", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Lies",
                id: "A01AB",
                text: "Rowlf looks scared and lied as Mom glares at him",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01D", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Okay, if you say so", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Lies",
                id: "A01AC",
                text: "Rowlf is scared and tells the truth.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01D", location: "row3>col1", style: "right" }],
                options_delay: 4,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "So you lied to me before? Well, Rowlf, you should not lie. You ate so many cookies, what if your stomach hurts later now?", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Lies",
                id: "A01B",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01C", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "I ate 3 or 4 cookies.", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Lies",
                id: "A01C",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01D", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Rowlf! I told you not to eat a lot of cookies! You ate so many cookies, what if your stomach hurts later now?", location: "row1>col3", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Lies",
                id: "A01D",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "next", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Well, I think you should go to your room and color your drawing, the one you have to turn in tomorrow for Mr. Rex’s class. ", location: "row1>col3", owner: "child", delay: 1 }],
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    // called whenever an option button is clicked
    LiePage.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LiePage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LiePage');
    };
    return LiePage;
}());
LiePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lie',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\lie\lie.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n\n    <ion-grid class="grid">\n\n      <ion-row text-center class="text_row">\n\n        <ion-col col-1>\n\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n\n        </ion-col>\n\n        <ion-col col-11>\n\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row1">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row2">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row3">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row4">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\lie\lie.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LiePage);

//# sourceMappingURL=lie.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lie_lie__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TruthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TruthPage = (function () {
    function TruthPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        console.log(this.dino_color);
        console.log(this.navParams.get('dino_color'));
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Truth",
                id: "A01",
                text: "Mom comes back to the kitchen.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A011", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Hey bud, how many cookies did you eat?", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Truth",
                id: "A011",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "A012", location: "row2>col1", style: "left" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Only two!", location: "row1>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Truth",
                id: "A012",
                text: "Mom was happy that Rowlf only ate 2.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A013", location: "row2>col1", style: "left" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Very well, Rowlf! You did not eat too many! Well, do you want to go finish up the drawing that you have to turn it for Mr. Rex’s class tomorrow?", location: "row1>col3", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Stays",
                id: "A013",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "next", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Yes!!", location: "row1>col2", owner: "child", delay: 2 }],
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    // called whenever an option button is clicked
    TruthPage.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__lie_lie__["a" /* LiePage */]);
    };
    TruthPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TruthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TruthPage');
    };
    return TruthPage;
}());
TruthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-truth',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\truth\truth.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n\n    <ion-grid class="grid">\n\n      <ion-row text-center class="text_row">\n\n        <ion-col col-1>\n\n          <h2 (click)="goHome()" class="home_button"  >Home</h2>\n\n        </ion-col>\n\n        <ion-col col-11>\n\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row1">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row2">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row3">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row4">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\truth\truth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], TruthPage);

//# sourceMappingURL=truth.js.map

/***/ })

});
//# sourceMappingURL=6.js.map