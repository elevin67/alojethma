import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavParams, AlertController, Platform, Events } from 'ionic-angular';
import { Ache1Page } from '../ache1/ache1';
import { CandyPage } from '../candy/candy';

/**
 * Generated class for the DrawActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-draw-act',
  templateUrl: 'draw-act.html',
})
export class DrawActPage {

  dino_color;
  ache: boolean;

  @ViewChild('myCanvas') canvas: any;
  canvasElement: any;
  lastX: number;
  lastY: number;

  currentColor: string = "#1abc9c";
  availableColors: any;

  brushSize: number = 10;

  constructor(public navParams: NavParams, public platform: Platform, public renderer: Renderer, private alertCtrl: AlertController, public events: Events) {
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


    ngAfterViewInit() {
      this.canvasElement = this.canvas.nativeElement;

      this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
      this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    }

    changeColor(color) {
      this.currentColor = color;
    }

    changeSize(size) {
      this.brushSize = size;
    }

    handleStart(ev) {
      console.log('handleStart');
      this.lastX = ev.touches[0].pageX;
      this.lastY = ev.touches[0].pageY;
    }

    handleMove(ev) {

      let ctx = this.canvasElement.getContext('2d');
      console.log(ctx);
      let currentX = ev.touches[0].pageX;
      let currentY = ev.touches[0].pageY;

      // console.log(currentX);
      // console.log(currentY);

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

      // console.log(this.lastX);
      // console.log(this.lastY);
    }

    clearCanvas() {
      let ctx = this.canvasElement.getContext('2d');
      ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }



    savePrompt() {
      let alert = this.alertCtrl.create({
        title: 'Exit',
        message: 'Do you want to exit your picture?',
        buttons: [
          {
            text: 'Yes',
            role: 'yes',
            handler: () => {
              if(this.ache == true) {
                console.log('now move to AchePage');
                this.events.publish('buttonClick', 'next', null, Ache1Page, this.dino_color, this.ache);
              } else {
                console.log('now move to CandyPage');
                this.events.publish('buttonClick', 'next', null, CandyPage, this.dino_color, this.ache);
              }
            }
          },
          {
            text: 'No',
            role: 'no',
            handler: () => {
            }
          }
        ]
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrawActPage');
  }

}
