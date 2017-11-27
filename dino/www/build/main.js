webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ache1Page; });
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
        console.log(this.dino_color);
        console.log(this.navParams.get('dino_color'));
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Pain1",
                id: "ache1a",
                text: "As Rowlf put the final touches to his wonderful drawing, he realized that his stomach was aching...",
                image: "backyard",
                options: [{ title: "Next...", id: "ache1b", location: "row2>col3", style: "right" }],
                options_delay: 1,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: "../assets/images/sunShine.gif", style: "ball", location: "row1>col3" }],
                dialogue: [{ text: "\"Ow...\", Rowlf thinks to himself, \"my stomach really hurts!\"", location: "row1>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Pain2",
                id: "ache1b",
                text: " Confused, Rowlf wonders if he should call his Mommy",
                image: "backyard",
                options: [{ title: "Tell Mommy!", id: "ache1c", location: "row2>col3", style: "right" }, { title: "Mommy doesn't need to know...", id: "ache1d", location: "row3>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/confusedChild.png", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "Hmm...I wonder if Mommy would know what to do...", location: "row2>col2", owner: "child", delay: 2 }],
            },
            {
                //options
                title: "Rowlf_Pain4",
                id: "ache1d",
                text: "But Rowlf's stomach ache continues to get worse...",
                image: "backyard",
                options: [{ title: "Call Mommy!", id: "ache1c", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }],
                dialogue: [{ text: "My stomach really hurts, I'd better tell Mommy!", location: "row2>col2", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Pain3",
                id: "ache1c",
                text: "Rowlf decides to call his Mommy for help. She comes in, looking worried.",
                image: "backyard",
                options: [{ title: "Next", id: "ache1e", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/mother.png", style: "mother", location: "row2>col2" }],
                dialogue: [{ text: "What is it, honey? What's wrong?", location: "row1>col2", owner: "child", delay: 2 }],
            },
            //NOT SURE WHERE DAD WILL BE IN THE FRAME POSITION WISE
            {
                title: "Rowlf_Pain5",
                id: "ache1e",
                text: "Unable to bear the pain, Rowlf starts to cry. Hearing Rowlf's cries, Dada comes into the room as well. He asks Mommy what is going on, and she explains.",
                image: "kitchen",
                options: [{ title: "Next...", id: "ache1f", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: this.character_path + "/mother.png", style: "mother", location: "row2>col3" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col1" }],
                dialogue: [{ text: "Rowlf ate too many chocolate chip cookies.The poor dear now has a stomach ache.", location: "row1>col3", owner: "child", delay: 1 }]
            },
            {
                title: "Rowlf_Pain6",
                id: "ache1f",
                text: "Dada tries to console Rowlf, and offers to go get some medicine.",
                image: "kitchen",
                options: [{ title: "Next...", id: "ache1g", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: this.character_path + "/mother.png", style: "mother", location: "row3>col3" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col1" }],
                dialogue: [{ text: "Don't cry, honey. I will go get some medicine and you will feel better in no time, eh?", location: "row1>col1", owner: "father", delay: 1 }],
            },
            {
                title: "Rowlf_Pain7",
                id: "ache1g",
                text: "However, Rowlf refuses to take the medicine even though his stomach ache continues to get worse.",
                image: "kitchen",
                options: [{ title: "Next..", id: "ache1h", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col2" }, { image: this.character_path + "/mother.png", style: "mother", location: "row3>col3" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col1" }],
                dialogue: [{ text: "B-but I don't want medicine, Dada! It tastes really bad!", location: "row1>col2", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain8",
                id: "ache1h",
                text: "Mommy and Dada explain to Rowlf that if he takes the medicine, he would feel better in no time.",
                image: "kitchen",
                options: [{ title: "Next..", id: "ache1i", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/mother.png", style: "mother", location: "row3>col2" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col3" }],
                dialogue: [{ text: "Rowlf, honey, the medicine will really help the stomach ache go away and then maybe we can do something fun.", location: "row1>col3", owner: "mother", delay: 1 }],
            },
            {
                title: "Rowlf_Pain9",
                id: "ache1i",
                text: "",
                image: "kitchen",
                options: [{ title: "Take the medcine", id: "ache1j", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }],
                dialogue: [],
            },
            {
                title: "Rowlf_Pain10",
                id: "ache1j",
                text: "Rowlf decides to take the medicine, and soon, he starts to feel much better.",
                image: "kitchen",
                options: [{ title: "Next", id: "ache1k", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }],
                dialogue: [{ text: "Wow!My stomach ache is gone. I wonder if Dada will take me to the candy store now.", location: "row1>col3", owner: "mother", delay: 1 }],
            },
            {
                title: "Rowlf_Pain11",
                id: "ache1k",
                text: "Excited at the prospect of candy, Rowlf goes to Dada and asks him if they can go the candy store.",
                image: "living",
                options: [{ title: "Next", id: "ache1l", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col3" }],
                dialogue: [{ text: "Dada! I don't feel sick anymore.You said you would take me to candy shop today.Let's go!", location: "row1>col1", owner: "child", delay: 1 }],
            },
            {
                title: "Rowlf_Pain12",
                id: "ache1l",
                text: "",
                image: "living",
                options: [{ title: "Next", id: "ache1m", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col3" }],
                dialogue: [{ text: "I'm afraid we can't go today, kiddo. We don't want you to get a stomach ache again. How about we go some other day?", location: "row1>col3", owner: "father", delay: 1 }],
            },
            {
                title: "Rowlf_Pain13",
                id: "ache1m",
                text: "Dejected, Rowlf realizes he should not have eaten all the cookies. Dada notices Rowlf's sadness, and attempts to console him.",
                image: "living",
                options: [{ title: "Next", id: "ache1n", location: "row2>col2", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row3>col1" }, { image: this.character_path + "/father.png", style: "father", location: "row3>col3" }],
                dialogue: [{ text: "Hey, kiddo, don't feel bad. Next time, just be careful to not eat all the cookies, eh? Let's go have some dinner now. I've made your favourite dish.", location: "row1>col3", owner: "father", delay: 1 }],
            },
            {
                title: "Rowlf_Pain15",
                id: "ache1n",
                text: "Rowlf, Mommy and Dada enjoy a delicious dinner of mashed potatoes, baked chicken and green beans.",
                image: "kitchen",
                options: [{ title: "Next", id: "ache1p", location: "row2>col2", style: "right" }],
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
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Ache1Page.prototype.goHome = function () {
        this.events.publish('buttonClick', 'next', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Ache1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ache1Page');
    };
    return Ache1Page;
}());
Ache1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ache1',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n\n    <ion-grid class="grid">\n\n      <ion-row text-center class="text_row">\n\n        <ion-col col-1>\n\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n\n        </ion-col>\n\n        <ion-col col-11>\n\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row1">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row2">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row3">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row4">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\act.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _c || Object])
], Ache1Page);

var _a, _b, _c;
//# sourceMappingURL=ache1.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__act1_act1__ = __webpack_require__(102);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__act1_act1__["a" /* Act1Page */], {
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
        selector: 'page-personalize',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\personalize\personalize.html"*/'<!--\n\n  Generated template for the PersonalizePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Personalize</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2 (click)=\'startStory("red")\'>Red</h2>\n\n  <h2 (click)=\'startStory("yellow")\'>Yellow</h2>\n\n  <h2 (click)=\'startStory("green")\'>Green</h2>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\personalize\personalize.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PersonalizePage);

//# sourceMappingURL=personalize.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Act1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ache1_ache1__ = __webpack_require__(100);
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
        console.log(this.dino_color);
        console.log(this.navParams.get('dino_color'));
        this.character_path = "../assets/images/" + this.dino_color;
        this.pages = [
            {
                title: "Rowlf_Play1",
                id: "A0F1",
                text: "It's a lovely Sunday afternoon and Rowlf, the baby dinosaur is playing in his backyard...",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F2", location: "row2>col3", style: "right" }],
                options_delay: 1,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }],
                dialogue: [],
            },
            {
                title: "Rowlf_Play2",
                id: "A0F2",
                text: "\"Rowlf\"... calls his Mommy from the kitchen.",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F3", location: "row2>col3", style: "right" }],
                options_delay: 1,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col3" }],
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
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col1" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col2" }],
                dialogue: [{ text: "Should I go in?", location: "row1>col1", owner: "child", delay: 2 }],
            },
            {
                title: "Rowlf_Stays",
                id: "A02",
                text: "\"Rowlf, honey...\", Mommy calls out again\.",
                image: "backyard",
                options: [{ title: "Next..", id: "A01", location: "row2>col3", style: "right" }],
                options_delay: 3,
                characters: [{ image: this.character_path + "/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }],
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
        this.events.publish('buttonClick', id, this.pages, __WEBPACK_IMPORTED_MODULE_3__ache1_ache1__["a" /* Ache1Page */]);
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
        selector: 'page-act1',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\act.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n\n    <ion-grid class="grid">\n\n      <ion-row text-center class="text_row">\n\n        <ion-col col-1>\n\n          <h2 (click)="goHome()" class="home_button">Home</h2>\n\n        </ion-col>\n\n        <ion-col col-11>\n\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row1">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row2">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row3">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center class="row4">\n\n        <ion-col col-4 class="col1">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col2">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n        <ion-col col-4 class="col3">\n\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\act.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], Act1Page);

//# sourceMappingURL=act1.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ache1/ache1.module": [
		265,
		2
	],
	"../pages/act1/act1.module": [
		266,
		1
	],
	"../pages/personalize/personalize.module": [
		267,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_act1_act1__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__ = __webpack_require__(100);
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_act1_act1__["a" /* Act1Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__["a" /* Ache1Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ache1/ache1.module#Ache1PageModule', name: 'Ache1Page', segment: 'ache1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/act1/act1.module#Act1PageModule', name: 'Act1Page', segment: 'act1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personalize/personalize.module#PersonalizePageModule', name: 'PersonalizePage', segment: 'personalize', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_act1_act1__["a" /* Act1Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ache1_ache1__["a" /* Ache1Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
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
    //find_page;
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.events = events;
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
            console.log("clicked");
            _this.sendFeedback(id, pages, component);
        });
        this.events.subscribe('opened', function (currentPage) {
            console.log("opened");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\app\app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\home\home.html"*/'<ion-content padding>\n\n  <h2>\n\n    Welcome to the home page!\n\n  </h2>\n\n  <div>\n\n    <img src="../assets/images/thought_cloud.gif" (click)=\'openStory()\'>\n\n    <div class="thought_cloud_text">Start</div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\luit\Documents\GitHub\alojethma\dino\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map