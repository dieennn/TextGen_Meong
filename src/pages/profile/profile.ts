import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { decryptedText } from "../../helper/secure"
import { authGoogle, keyLocalStorage } from "../../helper/environment"

import { initializeApp } from "@firebase/app";
import { getAuth, signOut } from "@firebase/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: Array<{}>;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl : ViewController,
    public navParams: NavParams
    ) {
      this.getLocalStorage();
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  getLocalStorage() {
    const localUser = localStorage.getItem(keyLocalStorage);
    if(localUser) {
      this.profile = JSON.parse(decryptedText(localUser))
      return JSON.parse(decryptedText(localUser));
    } else {
      return false;
    }
  }

  public logoutGoogle(){
    initializeApp(authGoogle);
    const auth = getAuth();
    
    signOut(auth).then(() => {
      localStorage.removeItem(keyLocalStorage);
      this.viewCtrl.dismiss();
    }).catch((error) => {
      console.log("error")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
