webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Act1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(77);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], Act1Page);

//# sourceMappingURL=act1.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__act1_act1__ = __webpack_require__(100);
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
        selector: 'page-personalize',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/personalize/personalize.html"*/'<!--\n  Generated template for the PersonalizePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Personalize</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2 (click)=\'startStory("red")\'>Red</h2>\n  <h2 (click)=\'startStory("yellow")\'>Yellow</h2>\n  <h2 (click)=\'startStory("green")\'>Green</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/personalize/personalize.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PersonalizePage);

//# sourceMappingURL=personalize.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/act1/act1.module": [
		264,
		1
	],
	"../pages/personalize/personalize.module": [
		265,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_act1_act1__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__ = __webpack_require__(101);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
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
            __WEBPACK_IMPORTED_MODULE_8__pages_personalize_personalize__["a" /* PersonalizePage */]
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(77);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/home/home.html"*/'<ion-content padding>\n  <h2>\n    Welcome to the home page!\n  </h2>\n  <div>\n    <img src="../assets/images/thought_cloud.gif" (click)=\'openStory()\'>\n    <div class="thought_cloud_text">Start</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/elevin/Documents/Macalester/Fall2017/Software/alojethma/dino/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map