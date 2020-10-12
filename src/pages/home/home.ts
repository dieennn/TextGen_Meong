import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import {NavController, IonicPage} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

// import { Platform } from 'ionic-angular';
//import {Autosize} from 'angular2-autosize';
//import * as $ from 'jquery';
//import * as $ from 'autosize';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home2.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, 
  	public modalCtrl : ModalController,
  	public loadingCtrl: LoadingController) {
    /*platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);*/
  }
//readmore
/*  toggle() {
  $ ('.moreContent').slideToggle();
  }*/
//modal
	openModal(){
	    var data = { message : 'hello world' };
	    var modalPage = this.modalCtrl.create('ModalPage',data);
	    modalPage.present();
	}
//modal

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}