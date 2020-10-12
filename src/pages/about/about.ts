import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
  	public viewCtrl : ViewController,
  	public navParams: NavParams) {
  }

  /*Close*/
  public home(){
  	/*this.navCtrl.push('HomePage2')*/
  	this.navCtrl.setRoot(HomePage);
  }
  /*Close*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    let data = [
      {
        id: 1,
        nama: 'Bimo',
        quote: ''
      },
      {
        id: 2,
        nama: 'Me',
        quote: ''
      },
      {
        id: 3,
        nama: 'Radityo',
        quote: ''
      },
      {
        id: 4,
        nama: 'Gilang',
        quote: ''
      },
      {
        id: 5,
        nama: 'Yuli',
        quote: ''
      }
    ];
    let item = document.getElementsByTagName('ion-item').length;
    for(let i = 0; i<item; i++) {
      async function randomQuote() {
        const response = await fetch('https://api.quotable.io/random')
        const quote = await response.json()

        let rand = Math.floor(Math.random() * 2020);
        let he = `
              <ion-avatar item-start="">
    
              <img src="https://robohash.org/${rand+data[i].id}.png?set=set4">
    
            </ion-avatar><div class="item-inner"><div class="input-wrapper"><!--bindings={
          "ng-reflect-ng-if": "true"
          }--><ion-label class="label label-md">

            <h2>${data[i].nama}</h2>
            <p>${quote.content} —${quote.author}</p>
    
          </ion-label></div><!--bindings={
          "ng-reflect-ng-if": "false"
          }--></div><div class="button-effect"></div>
        `;
        document.getElementsByTagName('ion-item')[i].innerHTML = he;
      }
      randomQuote()
    }
  }

}
