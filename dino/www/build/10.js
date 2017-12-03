webpackJsonp([10],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NightActPageModule", function() { return NightActPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__night_act__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NightActPageModule = (function () {
    function NightActPageModule() {
    }
    return NightActPageModule;
}());
NightActPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__night_act__["a" /* NightActPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__night_act__["a" /* NightActPage */]),
        ],
    })
], NightActPageModule);

//# sourceMappingURL=night-act.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NightActPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lie_lie__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__truth_truth__ = __webpack_require__(109);
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
 * Generated class for the NightActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NightActPage = (function () {
    function NightActPage(navCtrl, navParams, events) {
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
                title: "night",
                id: "night",
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
    NightActPage.prototype.sendFeedback = function (id) {
        var component;
        if (this.currentPage.id != 'next') {
            if (this.currentPage.id == 'cookie3d') {
                // then it's TRUTH
                console.log('truth');
                component = __WEBPACK_IMPORTED_MODULE_4__truth_truth__["a" /* TruthPage */];
            }
            else {
                // otherwise it's LIE
                console.log('lie');
                component = __WEBPACK_IMPORTED_MODULE_3__lie_lie__["a" /* LiePage */];
            }
        }
        this.events.publish('buttonClick', id, this.pages, component);
    };
    NightActPage.prototype.goHome = function () {
        this.events.publish('buttonClick', 'home', this.pages, __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    NightActPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NightActPage');
    };
    return NightActPage;
}());
NightActPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-night-act',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/night/night.html"*/'<!--\n  Generated template for the NightPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>night</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/night/night.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], NightActPage);

//# sourceMappingURL=night-act.js.map

/***/ })

});
//# sourceMappingURL=10.js.map