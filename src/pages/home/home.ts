import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import {NavController, IonicPage} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import {isLogin} from "../../helper/auth"
import { VoteService } from '../../service/vote.service';
import { splitIdType, getUserLogin } from '../../helper/formatter';

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
  isLogin: boolean


  constructor(
    public vote: VoteService,
    public navCtrl: NavController, 
  	public modalCtrl : ModalController,
  	public loadingCtrl: LoadingController) {
    /*platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);*/
  }

  
  
  async onVote(text_name: string, idText?: string): Promise<void> {
    try {
      const { uid, ...user } = getUserLogin()
      const {id, type} = splitIdType(idText)

      const { data: dataGet, error: errorGet } = await this.vote.getVote(id)

      if(dataGet.length === 0) {
        // create
        const insert = {
          text_name: text_name,
          like: type === 1,
          unlike: type === 0,
          user: user,
          uid: uid,
          id_text_name: id
        }

        const { data:dataCreate, error:errorCreate } = await this.vote.createVote(insert)
        console.log(dataCreate)
      } else {
        // update
        // like
        if(type === 1) {
          const { data:dataUpVote, error:errorUpVote } = await this.vote.upVote(id)
          console.log(dataUpVote)
        }
        // unlike
        if(type === 0) {
          const { data:dataDownVote, error:errorDownVote } = await this.vote.downVote(id)
          console.log(dataDownVote)
        }
      }
    } catch (error) {
      console.log('err', error)
    }
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
//modal
	loginProfile(){
    if(isLogin()) {
      this.modalCtrl.create('ProfilePage').present();
    } else {
      this.modalCtrl.create('LoginPage').present();
    }
	}
//modal

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    this.isLogin = isLogin();
  }
}