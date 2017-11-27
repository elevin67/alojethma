webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie_act_cookie_act__ = __webpack_require__(102);
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
        selector: 'page-personalize',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/personalize/personalize.html"*/'<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h2>Pick your color dinosaur!</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <img src=\'../assets/images/red/childBlink.gif\' (click)=\'startStory("red")\'>\n      </ion-col>\n      <ion-col col-4>\n        <img src=\'../assets/images/blue/childBlink.gif\' (click)=\'startStory("blue")\'>\n      </ion-col>\n      <ion-col col-4>\n        <img src=\'../assets/images/green/childBlink.gif\' (click)=\'startStory("green")\'>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/personalize/personalize.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PersonalizePage);

//# sourceMappingURL=personalize.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieActPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__ = __webpack_require__(103);
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
        // this.dino_color = 'green';
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
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
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
                    { image: this.character_path + "/motherBlink.gif", style: "parent", location: "row2>col3" }
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
                console.log('truth');
                component = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
            }
            else {
                // otherwise it's LIE
                console.log('lie');
                component = __WEBPACK_IMPORTED_MODULE_3__draw_act_draw_act__["a" /* DrawActPage */];
            }
        }
        this.events.publish('buttonClick', id, this.pages, component);
    };
    CookieActPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'home', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CookieActPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CookieActPage');
    };
    return CookieActPage;
}());
CookieActPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cookie-act',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/act.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], CookieActPage);

//# sourceMappingURL=cookie-act.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawActPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
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
    function DrawActPage(platform, renderer, alertCtrl, screenshot, events) {
        this.platform = platform;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.screenshot = screenshot;
        this.events = events;
        this.currentColor = "#1abc9c";
        this.brushSize = 10;
        this.availableColors = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
        this.screenshotPage = function () {
            this.screenshot.save('jpg', 80, 'image.jpg')
                .then(function (res) {
                console.log(res.filepath);
            });
            // .catch(() => console.error("screenshot error"));
        };
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
            title: 'Save',
            message: 'Do you want to save your picture to Camera Roll?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'yes',
                    handler: function () {
                        _this.platform.ready().then(function () {
                            _this.screenshot.save('jpg', 80, 'image.jpg')
                                .then(function (res) {
                                console.log(res.filepath);
                            });
                        });
                        console.log('now move to next page');
                        _this.events.publish('buttonClick', 'next', null, __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                        console.log('now move to next page');
                        _this.events.publish('buttonClick', 'next', null, __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
        selector: 'page-draw-act',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/draw-act/draw-act.html"*/'<ion-content no-bounce>\n<h2>Draw a picture of a dinosaur! Hit the next arrow at the bottom left to move on.</h2>\n<div class="draw">\n  <ion-toolbar id="top-toolbar">\n    <ion-buttons left>\n      <button *ngFor="let color of availableColors" icon-only ion-button (click)="changeColor(color)">\n        <ion-icon [style.color]="color" name="brush"></ion-icon>\n      </button>\n      <!-- <ion-icon [style.color]="red" name="brush"></ion-icon> -->\n    </ion-buttons>\n    <ion-buttons right>\n      <button style="border: 1px solid #cecece;" ion-button icon-only style.color="#fff" (click)="changeColor(\'#fff\')">\n        <ion-icon style="color: #fff;" name="square"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n  <ion-toolbar id="bottom-toolbar">\n    <ion-buttons left>\n        <button color="dark" ion-button icon-only (click)="clearCanvas()"><ion-icon name="trash"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="savePrompt()"><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button color="dark" ion-button icon-only (click)="changeSize(5)"><ion-icon style="font-size: 0.25em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(10)"><ion-icon style="font-size: 0.5em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(20)"><ion-icon style="font-size: 1em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(50)"><ion-icon style="font-size: 2em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(200)"><ion-icon style="font-size: 3em;" name="radio-button-on"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/draw-act/draw-act.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], DrawActPage);

//# sourceMappingURL=draw-act.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/act1/act1.module": [
		267,
		3
	],
	"../pages/cookie-act/cookie-act.module": [
		268,
		2
	],
	"../pages/draw-act/draw-act.module": [
		269,
		1
	],
	"../pages/personalize/personalize.module": [
		270,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Act1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Act1Page = (function () {
    function Act1Page(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dino_color = this.navParams.get('dino_color');
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Play1",
                id: "A0F1",
                text: "It's a lovely Sunday afternoon and Rowlf, the baby dinosaur is playing in his backyard...",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F2", location: "row2>col3", style: "right" }],
                options_delay: 1,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }, { image: "../assets/images/sun.gif", style: "ball", location: "row1>col3" }],
                dialogue: [],
            },
            {
                title: "Rowlf_Play2",
                id: "A0F2",
                text: "\"Rowlf\"... calls his Mommy from the kitchen.",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F3", location: "row2>col3", style: "right" }],
                options_delay: 1,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col3" }, { image: "../assets/images/sun.gif", style: "ball", location: "row1>col3" }],
                dialogue: [],
            },
            {
                //options
                title: "Rowlf_Play3",
                id: "A0F3",
                text: "\"Rowlf....\"",
                image: "backyard",
                options: [{ title: "Yes!", id: "A01", location: "row2>col3", style: "right" }, { title: "No..", id: "A02", location: "row3>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col1" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col2" }, { image: "../assets/images/sun.gif", style: "ball", location: "row1>col3" }],
                dialogue: [{ text: "Should I go in?", location: "row1>col1", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Stays",
                id: "A02",
                text: "\"Rowlf, honey...\", Mommy calls out again\.",
                image: "backyard",
                options: [{ title: "Next..", id: "A01", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }, { image: "../assets/images/sun.gif", style: "ball", location: "row1>col3" }],
                dialogue: [{ text: "Hmm... I should go inside and see why Mommy is calling me..", location: "row1>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Goes_in",
                id: "A01",
                text: "",
                image: "kitchen",
                options: [{ title: "Ummm... Yeah", id: "A011", location: "row2>col2", style: "left" }, { title: "No.. not really", id: "A012", location: "row3>col2", style: "left" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Hey bud, are you tired after playing all afternoon?", location: "row1>col3", owner: "mother", delay: 1 }]
            },
            {
                title: "Rowlf_Goes_in",
                id: "A011",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "next", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: this.character_path + "/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "I bet you would love some cookies then!", location: "row1>col3", owner: "mother", delay: 1 }],
            },
            {
                title: "Rowlf_Goes_in",
                id: "A012",
                text: "",
                image: "kitchen",
                options: [{ title: "Next..", id: "next", location: "row3>col1", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: this.character_path + "/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Oh, that's great!! Well, I was wondering if you would you like some cookies?", location: "row1>col3", owner: "mother", delay: 1 }],
            },
        ];
        this.currentPage = this.pages[0];
        this.events.publish('opened', this.currentPage);
        this.events.subscribe('next_page', function (currentPage) {
            _this.currentPage = currentPage;
        });
    }
    // called whenever an option button is clicked
    Act1Page.prototype.sendFeedback = function (id) {
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Act1Page.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // test to see if opened a page
    Act1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Act1Page');
    };
    return Act1Page;
}());
Act1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-act1',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-1>\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n        </ion-col>\n        <ion-col col-11>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/act.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], Act1Page);

//# sourceMappingURL=act1.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_act1_act1__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_personalize_personalize__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_draw_act_draw_act__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cookie_act_cookie_act__ = __webpack_require__(102);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_act1_act1__["a" /* Act1Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_draw_act_draw_act__["a" /* DrawActPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cookie_act_cookie_act__["a" /* CookieActPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/act1/act1.module#Act1PageModule', name: 'Act1Page', segment: 'act1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cookie-act/cookie-act.module#CookieActPageModule', name: 'CookieActPage', segment: 'cookie-act', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/draw-act/draw-act.module#DrawActPageModule', name: 'DrawActPage', segment: 'draw-act', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personalize/personalize.module#PersonalizePageModule', name: 'PersonalizePage', segment: 'personalize', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_act1_act1__["a" /* Act1Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_draw_act_draw_act__["a" /* DrawActPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cookie_act_cookie_act__["a" /* CookieActPage */]
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
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
        this.events.subscribe('buttonClick', function (id, pages, component) {
            if (id == 'home') {
                _this.homePrompt();
            }
            else {
                _this.sendFeedback(id, pages, component);
            }
        });
        this.events.subscribe('opened', function (currentPage) {
            _this.reveal_delayed(currentPage);
        });
    }
    MyApp.prototype.sendFeedback = function (id, pages, component) {
        if (id == 'next') {
            this.navCtrl.push(component, {
                dino_color: 'green'
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
        var options = document.getElementsByClassName('options');
        setTimeout(function () {
            for (var i = 0; i < options.length; i++) {
                options[i].style.visibility = "visible";
            }
        }, currentPage.options_delay * 1000);
        // reveals dialogues
        var dialogue_delay0, dialogue_delay1, dialogue_delay2;
        var dialogue_id0, dialogue_id1, dialogue_id2;
        for (var i = 0; i < currentPage.dialogue.length; i++) {
            if (i == 0) {
                dialogue_delay0 = currentPage.dialogue[i].delay;
                dialogue_id0 = currentPage.dialogue[i].owner;
                console.log(dialogue_id0);
            }
            else if (i == 1) {
                dialogue_delay1 = currentPage.dialogue[i].delay;
                dialogue_id1 = currentPage.dialogue[i].owner;
            }
            else if (i == 2) {
                dialogue_delay2 = currentPage.dialogue[i].delay;
                dialogue_id2 = currentPage.dialogue[i].owner;
            }
        }
        if (dialogue_id0 != null) {
            setTimeout(function () {
                document.getElementById(dialogue_id0).style.visibility = "visible";
            }, dialogue_delay0 * 1000);
        }
        if (dialogue_id1 != null) {
            setTimeout(function () {
                document.getElementById(dialogue_id1).style.visibility = "visible";
            }, dialogue_delay1 * 1000);
        }
        if (dialogue_id2 != null) {
            setTimeout(function () {
                document.getElementById(dialogue_id2).style.visibility = "visible";
            }, dialogue_delay2 * 1000);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personalize_personalize__ = __webpack_require__(101);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/home/home.html"*/'<ion-content padding>\n  <h2>\n    Welcome to the home page!\n  </h2>\n  <div>\n    <img src="../assets/images/thought_cloud.gif" (click)=\'openStory()\'>\n    <div class="thought_cloud_text">Start</div>\n  </div>\n  <audio src="../assets/music/barney.mp3" autoplay loop>\n<p>If you are reading this, it is because your browser does not support the audio element.</p>\n</audio>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map