webpackJsonp([9],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__ = __webpack_require__(51);
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
        this.ache = this.navParams.get('ache');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Lies",
                id: "A01",
                text: "Rowlf was putting the dish away right as mommy comes back to the kitchen.",
                image: "kitchen",
                options: [
                    { title: 'Next', id: 'A011', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Hey bud, how many cookies did you eat?", location: "row1>col3", owner: "mother", delay: 2 }
                ]
            },
            {
                title: "Rowlf_Lies",
                id: "A011",
                text: "Rowlf thinks about it for a while. 'I ate all of them. But Mommy would be mad if I tell her that. What should I say?'",
                image: "kitchen",
                options: [
                    { title: "Only a few", id: "A01A", location: "row2>col1", style: "left" },
                    { title: "I ate all of them.", id: "A01B", location: "row3>col1", style: "left" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ]
            },
            {
                title: "Rowlf_Lies",
                id: "A01A",
                text: "Rowlf lies.",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "A01AA", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "I only ate a few!", location: "row2>col2", owner: "child", delay: 2 }
                ],
            },
            {
                title: "Rowlf_Lies",
                id: "A01AA",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Yes", id: "A01AB", location: "row2>col1", style: "left" },
                    { title: "I ate all the cookies.", id: "A01AC", location: "row3>col1", style: "left" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Are you sure?", location: "row1>col3", owner: "mother", delay: 1 }
                ]
            },
            {
                title: "Rowlf_Lies",
                id: "A01AB",
                text: "Rowlf looks scared and lies as Mom glares at him",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "A01D", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Okay, if you say so", location: "row1>col3", owner: "mother", delay: 1 }
                ]
            },
            {
                title: "Rowlf_Lies",
                id: "A01AC",
                text: "Rowlf is scared and tells the truth.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01D", location: "row3>col1", style: "right" }],
                options_delay: 4,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "So you lied to me before? Well, Rowlf, you should not lie. You ate so many cookies, what if your stomach hurts later now?", location: "row1>col3", owner: "mother", delay: 1 }]
            },
            {
                title: "Rowlf_Lies",
                id: "A01B",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01C", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "I ate all the cookies.", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Lies",
                id: "A01C",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "A01D", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Rowlf! I told you not to eat a lot of cookies! You ate so many cookies, what if your stomach hurts later now?", location: "row1>col3", owner: "mother", delay: 1 }],
            },
            {
                title: "Rowlf_Lies",
                id: "A01D",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "next", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" }, { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Well, I think you should go to your room and color your drawing, the one you have to turn in tomorrow for Mr. Rex’s class. ", location: "row1>col3", owner: "mother", delay: 1 }],
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
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__["a" /* DrawActPage */], this.dino_color, this.ache);
    };
    LiePage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    LiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LiePage');
    };
    return LiePage;
}());
LiePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lie',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/lie/lie.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/lie/lie.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
], LiePage);

var _a, _b, _c;
//# sourceMappingURL=lie.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__ = __webpack_require__(51);
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
        this.ache = this.navParams.get('ache');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Truth",
                id: "A01",
                text: "Mom comes back to the kitchen.",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "A011", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [{ text: "Hey bud, how many cookies did you eat?", location: "row1>col3", owner: "mother", delay: 1 }]
            },
            {
                title: "Rowlf_Truth",
                id: "A011",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "A012", location: "row2>col1", style: "left" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Only a few!", location: "row2>col2", owner: "child", delay: 2 }
                ],
            },
            {
                title: "Rowlf_Truth",
                id: "A012",
                text: "Mom was happy that Rowlf only ate 2.",
                image: "kitchen",
                options: [{ title: "Next..", id: "A013", location: "row2>col1", style: "left" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Very well, Rowlf! You did not eat too many! Well, do you want to go finish up the drawing that you have to turn it for Mr. Rex’s class tomorrow?", location: "row1>col3", owner: "mother", delay: 2 }
                ],
            },
            {
                title: "Rowlf_Stays",
                id: "A013",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "next", location: "row2>col3", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherblink.gif", style: "mother", location: "row2>col3" }
                ],
                dialogue: [{ text: "Yes!!", location: "row2>col2", owner: "child", delay: 2 }],
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
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__["a" /* DrawActPage */], this.dino_color, this.ache);
    };
    TruthPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    TruthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TruthPage');
    };
    return TruthPage;
}());
TruthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-truth',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/truth/truth.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button"  >Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/truth/truth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], TruthPage);

//# sourceMappingURL=truth.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ache1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__night_night__ = __webpack_require__(109);
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
 * Generated class for the Ache1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Ache1Page = (function () {
    function Ache1Page(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        this.ache = this.navParams.get('ache');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Pain1",
                id: "ache1a",
                text: "As Rowlf put the final touches to his wonderful drawing, he realized that his stomach was aching...",
                image: "bedroom",
                options: [{ title: "Next...", id: "ache1b", location: "row2>col3", style: "right" }],
                options_delay: 2,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" }
                ],
                dialogue: [{ text: "\"Ow...\", Rowlf thinks to himself, \"my stomach really hurts!\"", location: "row2>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain2",
                id: "ache1b",
                text: " Confused, Rowlf wonders if he should call his Mommy",
                image: "bedroom",
                options: [{ title: "Tell Mommy!", id: "ache1c", location: "row2>col3", style: "right" }, { title: "Mommy doesn't need to know...", id: "ache1d", location: "row3>col3", style: "right" }],
                options_delay: 2,
                characters: [{ image: this.character_path + "/confusedChild.png", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "Hmm...I wonder if Mommy would know what to do...", location: "row2>col2", owner: "child", delay: 1 }],
            },
            {
                //options
                title: "Rowlf_Pain4",
                id: "ache1d",
                text: "But Rowlf's stomach ache continues to get worse...",
                image: "bedroom",
                options: [{ title: "Call Mommy!", id: "ache1c", location: "row2>col3", style: "right" }],
                options_delay: 2,
                characters: [{ image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "My stomach really hurts, I'd better tell Mommy!", location: "row2>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain3",
                id: "ache1c",
                text: "Rowlf decides to call his Mommy for help. She comes in, looking worried.",
                image: "bedroom",
                options: [{ title: "Next", id: "ache1e", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col2" }
                ],
                dialogue: [{ text: "What is it, honey? What's wrong?", location: "row1>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Pain5",
                id: "ache1e",
                text: "Unable to bear the pain, Rowlf starts to cry. Hearing Rowlf's cries, Dada comes into the room as well. He asks Mommy what is going on, and she explains.",
                image: "bedroom",
                options: [{ title: "Next...", id: "ache1f", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col3" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col1" }
                ],
                dialogue: [{ text: "Rowlf ate too many chocolate chip cookies.The poor dear now has a stomach ache.", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Pain6",
                id: "ache1f",
                text: "Dada tries to console Rowlf, and offers to go get some medicine.",
                image: "bedroom",
                options: [{ title: "Next...", id: "ache1g", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col3" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col1" }
                ],
                dialogue: [{ text: "Don't cry, honey. I will go get some medicine and you will feel better in no time, eh?", location: "row1>col1", owner: "father", delay: 1 }],
            },
            {
                title: "Rowlf_Pain7",
                id: "ache1g",
                text: "However, Rowlf refuses to take the medicine even though his stomach ache continues to get worse.",
                image: "bedroom",
                options: [{ title: "Next..", id: "ache1h", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col3" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col1" }
                ],
                dialogue: [{ text: "B-but I don't want medicine, Dada! It tastes really bad!", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain8",
                id: "ache1h",
                text: "Mommy and Dada explain to Rowlf that if he takes the medicine, he would feel better in no time.",
                image: "bedroom",
                options: [{ title: "Next..", id: "ache1i", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/motherBlink.gif", style: "mother", location: "row2>col3" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col1" }
                ],
                dialogue: [{ text: "Rowlf, honey, the medicine will really help the stomach ache go away and then maybe we can do something fun.", location: "row1>col3", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain9",
                id: "ache1i",
                text: "",
                image: "bedroom",
                options: [{ title: "Take the medcine", id: "ache1j", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "Hmm...I guess Mommy and Dada are right. I should probably take the medicine.", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain10",
                id: "ache1j",
                text: "Rowlf decides to take the medicine, and soon, he starts to feel much better.",
                image: "bedroom",
                options: [{ title: "Next", id: "ache1k", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "Wow!My stomach ache is gone. I wonder if Dada will take me to the candy store now.", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain11",
                id: "ache1k",
                text: "Excited at the thought of candy, Rowlf goes to Dada and asks him if they can go the candy store.",
                image: "living",
                options: [{ title: "Next", id: "ache1l", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [{ text: "Dada! I don't feel sick anymore.You said you would take me to candy shop today.Let's go!", location: "row1>col1", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain12",
                id: "ache1l",
                text: "",
                image: "living",
                options: [{ title: "Next", id: "ache1m", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [{ text: "I'm afraid we can't go today, kiddo. We don't want you to get a stomach ache again. How about we go some other day?", location: "row1>col3", owner: "father", delay: 1 }],
            },
            {
                title: "Rowlf_Pain13",
                id: "ache1m",
                text: "Dejected, Rowlf realizes he should not have eaten all the cookies. Dada notices Rowlf's sadness, and attempts to console him.",
                image: "living",
                options: [{ title: "Next", id: "ache1n", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/fatherBlink.gif", style: "father", location: "row3>col3" }
                ],
                dialogue: [
                    { text: "Hey, kiddo, don't feel bad. Let's go have some dinner now. I've made your favourite dish.", location: "row2>col3", owner: "father", delay: 1 }
                ],
            },
            {
                title: "Rowlf_Pain15",
                id: "ache1n",
                text: "Rowlf, Mommy and Dada enjoy a delicious dinner of mashed potatoes, baked chicken and green beans.",
                image: "kitchen",
                options: [{ title: "Next", id: "next", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [],
                dialogue: [],
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    Ache1Page.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__night_night__["a" /* NightPage */], this.dino_color, this.ache);
    };
    Ache1Page.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    Ache1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ache1Page');
    };
    return Ache1Page;
}());
Ache1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ache1',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
], Ache1Page);

var _a, _b, _c;
//# sourceMappingURL=ache1.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie_act_cookie_act__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalizePage = (function () {
    function PersonalizePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.startStory = function (color) {
            console.log(color);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cookie_act_cookie_act__["a" /* CookieActPage */], {
                dino_color: color
            });
        };
    }
    PersonalizePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalizePage');
    };
    return PersonalizePage;
}());
PersonalizePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personalize',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/personalize/personalize.html"*/'<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h2>Pick your color dinosaur!</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <img src=\'../assets/images/red/childBlink.gif\' (click)=\'startStory("red")\'>\n      </ion-col>\n      <ion-col col-4>\n        <img src=\'../assets/images/blue/childBlink.gif\' (click)=\'startStory("blue")\'>\n      </ion-col>\n      <ion-col col-4>\n        <img src=\'../assets/images/green/childBlink.gif\' (click)=\'startStory("green")\'>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/personalize/personalize.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PersonalizePage);

//# sourceMappingURL=personalize.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieActPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lie_lie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__truth_truth__ = __webpack_require__(103);
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
 * Generated class for the CookieActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CookieActPage = (function () {
    function CookieActPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            // Cookie1
            {
                title: "Cookie1a",
                id: "cookie1a",
                text: "It is a lovely Sunday afternoon and Rowlf is playing in his backyard.",
                image: "backyard",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: "../assets/images/sun.gif", style: "sun", location: "row1>col3" }
                ],
                dialogue: [],
                options: [
                    { title: 'Next', id: 'cookie1b', location: 'row2>col3', style: 'left' }
                ],
                options_delay: 1
            },
            {
                title: "Cookie1b",
                id: "cookie1b",
                text: "Suddenly, he hears his mommy calling out for him from inside...",
                image: "backyard",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: "../assets/images/sun.gif", style: "sun", location: "row1>col3" }
                ],
                dialogue: [
                    { text: "Rowlf, can you come to the kitchen please?", location: "row1>col1", owner: "parent", delay: 1 },
                ],
                options: [
                    { title: 'Next', id: 'cookie1c', location: 'row2>col3', style: 'left' }
                ],
                options_delay: 2
            },
            {
                title: "Cookie1c",
                id: "cookie1c",
                text: "Should Rowlf go in?",
                image: "backyard",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: "../assets/images/sun.gif", style: "sun", location: "row1>col3" }
                ],
                dialogue: [],
                options: [
                    { title: 'Yes', id: 'cookie2a', location: 'row2>col1', style: 'right' },
                    { title: 'No', id: 'cookie1d', location: 'row2>col3', style: 'left' }
                ],
                options_delay: 1
            },
            {
                title: "Cookie1d",
                id: "cookie1d",
                text: "Rowlf decides not to go in and ignores his mom. But his mommy calls out again...",
                image: "backyard",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col2" },
                    { image: "../assets/images/sun.gif", style: "sun", location: "row1>col3" }
                ],
                dialogue: [
                    { text: "Rowlf honey??", location: "row1>col1", owner: "mother", delay: 1 }
                ],
                options: [
                    { title: 'Next', id: 'cookie2a', location: 'row2>col3', style: 'left' }
                ],
                options_delay: 1
            },
            // Cookie2
            {
                title: "Cookie2a",
                id: "cookie2a",
                text: "",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "You called, mommy?", location: "row2>col1", owner: "child", delay: 1 },
                    { text: "Hey bud! You must be tired from all that playing outside?", location: "row1>col3", owner: "mother", delay: 2 },
                ],
                options: [
                    { title: 'Yeah, I\'m pretty tired', id: 'cookie2b', location: 'row3>col2', style: 'left' },
                    { title: 'No, I\'m feeling okay!', id: 'cookie2c', location: 'row3>col2', style: 'right' },
                ],
                options_delay: 3
            },
            {
                title: "Cookie2b",
                id: "cookie2b",
                text: "",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Well that's good! I made cookies for you, would you like some?", location: "row1>col3", owner: "mother", delay: 1 },
                ],
                options: [
                    { title: 'No, I\'m not hungry', id: 'cookie2d', location: 'row2>col2', style: 'left' },
                    { title: 'Maybe... What kind?', id: 'cookie2d', location: 'row2>col2', style: 'right' },
                    { title: 'Yes!!!', id: 'cookie3a', location: 'row3>col2', style: 'right' }
                ],
                options_delay: 3
            },
            {
                title: "Cookie2c",
                id: "cookie2c",
                text: "",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Oh I bet you would like some cookies then?", location: "row1>col3", owner: "mother", delay: 1 },
                ],
                options: [
                    { title: 'No not really', id: 'cookie2d', location: 'row3>col2', style: 'left' },
                    { title: 'Yes please!!', id: 'cookie3a', location: 'row3>col2', style: 'right' },
                ],
                options_delay: 3
            },
            {
                title: "Cookie2d",
                id: "cookie2d",
                text: "",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" },
                    { image: '../assets/images/cookie.png', style: 'cookie', location: "row3>col2" }
                ],
                dialogue: [
                    { text: "What about chocolate chip cookies??", location: "row1>col3", owner: "mother", delay: 1 },
                    { text: "Hmmm...", location: "row2>col1", owner: "child", delay: 3 }
                ],
                options: [
                    { title: 'Next', id: 'cookie2e', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 5
            },
            {
                title: "Cookie2e",
                id: "cookie2e",
                text: "Rowlf decides he really does want some cookies",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Okay I'll take some cookies!", location: "row2>col1", owner: "child", delay: 1 }
                ],
                options: [
                    { title: 'Next', id: 'cookie3a', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 3
            },
            // Cookie3
            {
                title: "Cookie3a",
                id: "cookie3a",
                text: "Mommy brings out the cookies. They smell so good!",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" },
                    { image: '../assets/images/cookieFull.png', style: 'cookieTray', location: 'row3>col2' },
                ],
                dialogue: [
                    { text: "Now don't eat all of them at once! You may get a tummy ache...", location: "row1>col3", owner: "mother", delay: 2 },
                ],
                options: [
                    { title: 'Next', id: 'cookie3b', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 3
            },
            {
                title: "Cookie3b",
                id: "cookie3b",
                text: "Mommy leaves. Rowlf eats a cookie, and another one, and another one...",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: '../assets/images/cookieTray.gif', style: 'cookieTray', location: 'row3>col2' },
                ],
                dialogue: [],
                options: [
                    { title: 'Next', id: 'cookie3c', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 3
            },
            {
                title: "Cookie3c",
                id: "cookie3c",
                text: "There are only two cookies left...",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: '../assets/images/cookie2.png', style: 'cookieTray', location: 'row3>col2' },
                ],
                dialogue: [
                    { text: "Should I eat one more?", location: "row2>col1", owner: "child", delay: 2 },
                ],
                options: [
                    { title: 'Just one more...', id: 'cookie3e', location: 'row2>col2', style: 'left' },
                    { title: 'No I shouldn\'t', id: 'cookie3d', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 4
            },
            {
                title: "Cookie3d",
                id: "cookie3d",
                text: "",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: '../assets/images/cookie2.png', style: 'cookieTray', location: 'row3>col2' },
                ],
                dialogue: [
                    { text: "Mommy said my tummy would hurt. I'm done eating cookies", location: "row2>col1", owner: "child", delay: 2 },
                ],
                options: [
                    { title: 'Next', id: 'next', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 4
            },
            {
                title: "Cookie3e",
                id: "cookie3e",
                text: "Now there is only one cookie left... Mommy said not to eat all the cookies!",
                image: "kitchen",
                characters: [
                    { image: this.character_path + "/childBlink.gif", style: "child", location: "row3>col1" },
                    { image: '../assets/images/cookie2-1.png', style: 'cookieTray', location: 'row3>col2' },
                ],
                dialogue: [
                    { text: "I kind of want that last cookie... What should I do?", location: "row2>col1", owner: "child", delay: 2 },
                ],
                options: [
                    // leads to LIE
                    { title: 'Finish them!!', id: 'next', location: 'row2>col2', style: 'left' },
                    { title: 'I won\'t eat it', id: 'cookie3d', location: 'row2>col2', style: 'right' },
                ],
                options_delay: 4
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    // called whenever an option button is clicked
    CookieActPage.prototype.sendFeedback = function (id) {
        var component;
        if (this.currentPage.id != 'next') {
            if (this.currentPage.id == 'cookie3d') {
                // then it's TRUTH
                this.ache = false;
                component = __WEBPACK_IMPORTED_MODULE_4__truth_truth__["a" /* TruthPage */];
            }
            else {
                // otherwise it's LIE
                this.ache = true;
                component = __WEBPACK_IMPORTED_MODULE_3__lie_lie__["a" /* LiePage */];
            }
        }
        this.events.publish('buttonClick', id, this.pages, component, this.dino_color, this.ache);
    };
    CookieActPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'home', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    CookieActPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CookieActPage');
    };
    return CookieActPage;
}());
CookieActPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cookie-act',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], CookieActPage);

//# sourceMappingURL=cookie-act.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__night_night__ = __webpack_require__(109);
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
 * Generated class for the CandyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CandyPage = (function () {
    function CandyPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "CandyDad",
                id: "candy1",
                text: "Once Rowlf finished his drawing, his Dada came into the bedroom",
                image: "kitchen",
                options: [{ title: "Next..", id: "candy2", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Hey Rowlf, I heard you were a good boy today and only ate two cookies..", location: "row1>col3", owner: "father", delay: 1 },
                    { text: "Yes Dada! I ate only two cookies!", location: "row2>col2", owner: "child", delay: 1 }
                ]
            },
            {
                title: "CandyDad",
                id: "candy2",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "candy3", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Well, let's go to the Candy shop to get you some candies..", location: "row1>col3", owner: "father", delay: 1 },
                    { text: "Really Dada??? Yay!", location: "row2>col2", owner: "child", delay: 1 }
                ]
            },
            {
                title: "CandyDad",
                id: "candy3",
                text: "Rowlf and Dad drove to the candy store and Rowlf is excited to buy his favourite candy.",
                image: "kitchen",
                options: [
                    { title: "Chocolate!", id: "candyChoco", location: "row3>col1", style: "right" },
                    { title: "Gummy Bear!", id: "candyGummy", location: "row3>col1", style: "right" },
                    { title: "Sour Bomb!", id: "candyBomb", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "So what candy do you want Rowlf?", location: "row1>col3", owner: "father", delay: 1 }
                ]
            },
            {
                title: "CandyDad",
                id: "candyChoco",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [],
                dialogue: []
            },
            {
                title: "CandyDad",
                id: "candyGummy",
                text: "",
                image: "backyard",
                options: [
                    { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [],
                dialogue: []
            },
            {
                title: "CandyDad",
                id: "candySour",
                text: "",
                image: "LivingRoom",
                options: [
                    { title: "Next..", id: "candyend", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [],
                dialogue: []
            },
            {
                title: "CandyDad",
                id: "candyend",
                text: "",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "candydinner", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Well let'g go home and have dinner.", location: "row1>col3", owner: "father", delay: 1 }
                ]
            },
            {
                title: "CandyDad",
                id: "candydinner",
                text: "Rowlf and his parents have dinner, and after a long day Momma and Dada put Rowlf to bed..",
                image: "kitchen",
                options: [
                    { title: "Next..", id: "next", location: "row3>col1", style: "right" }
                ],
                options_delay: 3,
                characters: [],
                dialogue: [
                    { text: "", location: "row1>col3", owner: "father", delay: 1 }
                ]
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    CandyPage.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__night_night__["a" /* NightPage */], this.dino_color, this.ache);
    };
    CandyPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    CandyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CandyPage');
    };
    return CandyPage;
}());
CandyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-candy',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
], CandyPage);

var _a, _b, _c;
//# sourceMappingURL=candy.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the NightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NightPage = (function () {
    function NightPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Night",
                id: "night1",
                text: "After finishing dinner, Rowlf is very tired. He goes back to his room.",
                image: "kitchen",
                options: [{ title: "Next", id: "night2", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "Ok, bud, off yo go to sleep..", location: "row1>col3", owner: "father", delay: 1 }
                ]
            },
            {
                title: "Night",
                id: "night2",
                text: "",
                image: "kitchen",
                options: [{ title: "I love you both", id: "sleep", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [
                    { image: this.character_path + "/childblink.gif", style: "child", location: "row3>col2" },
                    { image: this.character_path + "/fatherblink.gif", style: "father", location: "row2>col3" }
                ],
                dialogue: [
                    { text: "I love you Momma. I love you Dada.", location: "row1>col3", owner: "child", delay: 1 },
                    { text: "Oh hon, we both love you too.", location: "row1>col3", owner: "mother", delay: 1 }
                ]
            },
            {
                title: "SleepingRowlf",
                id: "sleep",
                text: "",
                image: "kitchen",
                options: [],
                options_delay: 3,
                characters: [],
                dialogue: []
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    NightPage.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], this.dino_color, this.ache);
    };
    NightPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, null);
    };
    NightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NightPage');
    };
    return NightPage;
}());
NightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-night',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/act.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], NightPage);

//# sourceMappingURL=night.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ache1/ache1.module": [
		271,
		8
	],
	"../pages/candy/candy.module": [
		272,
		7
	],
	"../pages/cookie-act/cookie-act.module": [
		273,
		6
	],
	"../pages/draw-act/draw-act.module": [
		274,
		5
	],
	"../pages/lie/lie.module": [
		275,
		4
	],
	"../pages/night-act/night-act.module": [
		276,
		0
	],
	"../pages/night/night.module": [
		277,
		3
	],
	"../pages/personalize/personalize.module": [
		278,
		2
	],
	"../pages/truth/truth.module": [
		279,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personalize_personalize__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.openStory = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__personalize_personalize__["a" /* PersonalizePage */]);
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/home/home.html"*/'<ion-content padding>\n  <h2>\n    Welcome to the home page!\n  </h2>\n  <div>\n    <img src="../assets/images/thought_cloud.gif" (click)=\'openStory()\'>\n    <div class="thought_cloud_text">Start</div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_truth_truth__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lie_lie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_draw_act_draw_act__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cookie_act_cookie_act__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candy_candy__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_night_night__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__["a" /* Ache1Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_draw_act_draw_act__["a" /* DrawActPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cookie_act_cookie_act__["a" /* CookieActPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_truth_truth__["a" /* TruthPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lie_lie__["a" /* LiePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_candy_candy__["a" /* CandyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_night_night__["a" /* NightPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ache1/ache1.module#Ache1PageModule', name: 'Ache1Page', segment: 'ache1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/candy/candy.module#CandyPageModule', name: 'CandyPage', segment: 'candy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cookie-act/cookie-act.module#CookieActPageModule', name: 'CookieActPage', segment: 'cookie-act', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/draw-act/draw-act.module#DrawActPageModule', name: 'DrawActPage', segment: 'draw-act', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lie/lie.module#LiePageModule', name: 'LiePage', segment: 'lie', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/night-act/night-act.module#NightActPageModule', name: 'NightActPage', segment: 'night-act', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/night/night.module#NightPageModule', name: 'NightPage', segment: 'night', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personalize/personalize.module#PersonalizePageModule', name: 'PersonalizePage', segment: 'personalize', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/truth/truth.module#TruthPageModule', name: 'TruthPage', segment: 'truth', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__["a" /* Ache1Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_draw_act_draw_act__["a" /* DrawActPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cookie_act_cookie_act__["a" /* CookieActPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_truth_truth__["a" /* TruthPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lie_lie__["a" /* LiePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_candy_candy__["a" /* CandyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_night_night__["a" /* NightPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__["a" /* Screenshot */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, alertCtrl) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.find_page = function (id, pages) {
            for (var i = 0; i < pages.length; i++) {
                if (pages[i].id == id) {
                    return i;
                }
            }
            return;
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.events.subscribe('buttonClick', function (id, pages, component, dino_color, ache) {
            if (id == 'home') {
                _this.homePrompt();
            }
            else {
                _this.sendFeedback(id, pages, component, dino_color, ache);
            }
        });
        this.events.subscribe('opened', function (currentPage) {
            console.log('opened event');
            _this.reveal_delayed(currentPage);
        });
    }
    MyApp.prototype.sendFeedback = function (id, pages, component, dino_color, ache) {
        if (id == 'next') {
            this.navCtrl.push(component, {
                dino_color: dino_color,
                ache: ache
            });
            return;
        }
        var next_page_index = this.find_page(id, pages);
        var currentPage = pages[next_page_index];
        this.events.publish('next_page', currentPage);
        this.reveal_delayed(currentPage);
    };
    MyApp.prototype.homePrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Home',
            message: 'Do you really want to exit the story and return to the home page?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'yes',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.reveal_delayed = function (currentPage) {
        // reveals the options
        // don't use document
        // use currentPage
        var options = document.getElementsByClassName('options');
        setTimeout(function () {
            for (var i = 0; i < options.length; i++) {
                options[i].style.visibility = "visible";
            }
        }, currentPage.options_delay * 1000);
        var _loop_1 = function (i) {
            var dialogue_delay = currentPage.dialogue[i].delay;
            var dialogue_id = currentPage.dialogue[i].owner;
            setTimeout(function () {
                if (document.getElementById(dialogue_id) != null) {
                    document.getElementById(dialogue_id).style.visibility = "visible";
                }
            }, dialogue_delay * 1000);
        };
        // reveals dialogues
        for (var i = 0; i < currentPage.dialogue.length; i++) {
            _loop_1(i);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n<p>If you are reading this, it is because your browser does not support the audio element.</p>\n<audio src="/assets/music/dino.mp3" autoplay loop></audio>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawActPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ache1_ache1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__candy_candy__ = __webpack_require__(108);
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
 * Generated class for the DrawActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrawActPage = (function () {
    function DrawActPage(navParams, platform, renderer, alertCtrl, screenshot, events) {
        this.navParams = navParams;
        this.platform = platform;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.screenshot = screenshot;
        this.events = events;
        this.currentColor = "#1abc9c";
        this.brushSize = 10;
        this.dino_color = this.navParams.get('dino_color');
        this.ache = this.navParams.get('ache');
        this.availableColors = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
    }
    DrawActPage.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    DrawActPage.prototype.changeColor = function (color) {
        this.currentColor = color;
    };
    DrawActPage.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    DrawActPage.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    DrawActPage.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = 'round';
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColor;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    DrawActPage.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    DrawActPage.prototype.savePrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Exit',
            message: 'Do you want to exit your picture?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'yes',
                    handler: function () {
                        if (_this.ache == true) {
                            console.log('now move to AchePage');
                            _this.events.publish('buttonClick', 'next', null, __WEBPACK_IMPORTED_MODULE_3__ache1_ache1__["a" /* Ache1Page */], _this.dino_color, _this.ache);
                        }
                        else {
                            console.log('now move to CandyPage');
                            _this.events.publish('buttonClick', 'next', null, __WEBPACK_IMPORTED_MODULE_4__candy_candy__["a" /* CandyPage */], _this.dino_color, _this.ache);
                        }
                    }
                },
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    DrawActPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DrawActPage');
    };
    return DrawActPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myCanvas'),
    __metadata("design:type", Object)
], DrawActPage.prototype, "canvas", void 0);
DrawActPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-draw-act',template:/*ion-inline-start:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/draw-act/draw-act.html"*/'<ion-content no-bounce>\n<h2>Draw a picture of a dinosaur! Hit the next arrow at the bottom left to move on.</h2>\n<div class="draw">\n  <ion-toolbar id="top-toolbar">\n    <ion-buttons left>\n      <button *ngFor="let color of availableColors" icon-only ion-button (click)="changeColor(color)">\n        <ion-icon [style.color]="color" name="brush"></ion-icon>\n      </button>\n      <!-- <ion-icon [style.color]="red" name="brush"></ion-icon> -->\n    </ion-buttons>\n    <ion-buttons right>\n      <button style="border: 1px solid #cecece;" ion-button icon-only style.color="#fff" (click)="changeColor(\'#fff\')">\n        <ion-icon style="color: #fff;" name="square"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <canvas #myCanvas id="canvas" (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n  <ion-toolbar id="bottom-toolbar">\n    <ion-buttons left>\n        <button color="dark" ion-button icon-only (click)="clearCanvas()"><ion-icon name="trash"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="savePrompt()"><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button color="dark" ion-button icon-only (click)="changeSize(5)"><ion-icon style="font-size: 0.25em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(10)"><ion-icon style="font-size: 0.5em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(20)"><ion-icon style="font-size: 1em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(50)"><ion-icon style="font-size: 2em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(200)"><ion-icon style="font-size: 3em;" name="radio-button-on"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Alvin/Downloads/GitHub/alojethma/dino/src/pages/draw-act/draw-act.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], DrawActPage);

//# sourceMappingURL=draw-act.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map