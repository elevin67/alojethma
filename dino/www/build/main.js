webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.moral_array = [];
        this.screen_height = screen.height;
        this.screen_width = screen.width;
        this.moral_array = [0, 0, 0, 0];
        console.log(this.moral_array);
        this.pages = [
            {
                title: "Rowlf_Play1",
                id: "A0F1",
                text: "It's a lovely Sunday afternoon and Rowlf, the baby dinosaur is playing in his backyard...",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F2", location: "row2>col3", style: "right", moral_index: 0 }],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }],
                dialogue: [],
                weight: 0
            },
            {
                title: "Rowlf_Play2",
                id: "A0F2",
                text: "\"Rowlf\"... calls his Mommy from the kitchen.",
                image: "backyard",
                options: [{ title: "Next..", id: "A0F3", location: "row2>col3", style: "right", moral_index: 0 }],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col3" }],
                dialogue: [],
                weight: 0
            },
            {
                //options
                title: "Rowlf_Play3",
                id: "A0F3",
                text: "\"Rowlf....\"",
                image: "backyard",
                options: [{ title: "Yes!", id: "A01", location: "row2>col3", style: "right", moral_index: 0 }, { title: "No..", id: "A02", location: "row3>col3", style: "right", moral_index: 0 }],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row2>col1" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col2" }],
                dialogue: [{ text: "Should I go in?", location: "row1>col1", style: "right", owner: "child", delay: 2 }],
                weight: 0
            },
            {
                title: "Rowlf_Stays",
                id: "A02",
                text: "\"Rowlf, honey...\", Mommy calls out again\.",
                image: "backyard",
                options: [{ title: "Next..", id: "A01", location: "row2>col3", style: "right", moral_index: 0 }],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row2>col2" }, { image: "../assets/images/ball.gif", style: "ball", location: "row3>col1" }],
                dialogue: [{ text: "Hmm... I should go inside and see why Mommy is calling me..", location: "row1>col2", owner: "child", delay: 3 }],
                weight: 0
            },
            {
                title: "Rowlf_Goes_in",
                id: "A01",
                text: "",
                image: "kitchen",
                options: [{ title: "Ummm... Yeah", id: "A011", location: "row2>col2", style: "left", moral_index: 0 }, { title: "No.. not really", id: "A012", location: "row3>col2", style: "left", moral_index: 0 }],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row3>col1" }, { image: "../assets/images/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Hey bud, are you tired after playing all afternoon?", location: "row1>col3", owner: "mother", delay: 1 }],
                weight: 0
            },
            {
                title: "Rowlf_Goes_in",
                id: "A011",
                text: "",
                image: "kitchen",
                options: [],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row3>col2" }, { image: "../assets/images/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "I bet you would love some cookies then!", location: "row1>col3", owner: "mother", delay: 1 }],
                weight: 0
            },
            {
                title: "Rowlf_Goes_in",
                id: "A012",
                text: "",
                image: "kitchen",
                options: [],
                characters: [{ image: "../assets/images/child.png", style: "child", location: "row3>col2" }, { image: "../assets/images/mother.png", style: "mother", location: "row2>col3" }],
                dialogue: [{ text: "Oh, that's great!! Well, I was wondering if you would you like some cookies?", location: "row1>col3", owner: "mother", delay: 1 }],
                weight: 0
            },
        ];
        this.sendFeedback = function (id, moral_index) {
            this.next_page_index = this.find_page(id);
            console.log(this.moral_array);
            this.moral_array[moral_index] += this.currentPage.weight;
            console.log(this.moral_array);
            this.currentPage = this.pages[this.next_page_index];
            this.reveal_delayed();
        };
        this.find_page = function (id) {
            for (var i = 0; i < this.pages.length; i++) {
                if (this.pages[i].id == id) {
                    return i;
                }
            }
            return false;
        };
        this.reveal_delayed = function () {
            var options = document.getElementsByClassName('options');
            console.log(options);
            console.log(this.currentPage.options);
            setTimeout(function () {
                for (var i = 0; i < options.length; i++) {
                    options[i].style.visibility = "visible";
                }
            }, 4000);
            var dialogue_delay0, dialogue_delay1, dialogue_delay2;
            var dialogue_id0, dialogue_id1, dialogue_id2;
            for (var i = 0; i < this.currentPage.dialogue.length; i++) {
                if (i == 0) {
                    dialogue_delay0 = this.currentPage.dialogue[i].delay;
                    dialogue_id0 = this.currentPage.dialogue[i].owner;
                }
                else if (i == 1) {
                    dialogue_delay1 = this.currentPage.dialogue[i].delay;
                    dialogue_id1 = this.currentPage.dialogue[i].owner;
                }
                else if (i == 2) {
                    dialogue_delay2 = this.currentPage.dialogue[i].delay;
                    dialogue_id2 = this.currentPage.dialogue[i].owner;
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
        };
        this.currentPage = this.pages[0];
        this.reveal_delayed();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // console.log(document.getElementsByClassName('dialogue_box'));
        // var elems = document.getElementsByClassName('dialogue_box');
        // setTimeout(function(){
        //   for (let i = 0; i < elems.length; i++) {
        //     elems[i].style.visibility = "visible";
        //   }
        // },3000);
        this.reveal_delayed();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/OJ/Documents/GitHub/alojethma/dino/src/pages/home/home.html"*/'<ion-content padding class=\'{{currentPage.image}}\' overflow-scroll="true">\n    <ion-grid class="grid">\n      <ion-row text-center class="text_row">\n        <ion-col col-12>\n          <div *ngIf="currentPage.text != \'\'"><h2>{{ currentPage.text }}</h2></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row1">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row1>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row1>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row2">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col1\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col2\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row2>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let d of currentPage.dialogue"><div *ngIf="d.location == \'row2>col3\'"><div class="dialogue_box" id={{d.owner}} style="visibility:hidden;">{{d.text}}</div></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row2>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row3">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col1\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col2\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row3>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n          <div *ngFor="let o of currentPage.options"><div *ngIf="o.location == \'row3>col3\'"><div class="{{ o.style }} options" (click)="sendFeedback(o.id,o.moral_index)" style="visibility:hidden;"><img src="../assets/images/thought_cloud.gif"><div class="thought_cloud_text">{{ o.title }}</div></div></div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row4">\n        <ion-col col-4 class="col1">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col1\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col2">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col2\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n        <ion-col col-4 class="col3">\n          <div *ngFor="let character of currentPage.characters"><div *ngIf="character.location == \'row4>col3\'"><img class="{{ character.style }}" src="{{ character.image }}"></div></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/OJ/Documents/GitHub/alojethma/dino/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/OJ/Documents/GitHub/alojethma/dino/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/OJ/Documents/GitHub/alojethma/dino/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map