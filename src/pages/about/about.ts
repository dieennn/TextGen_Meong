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
  }

}
