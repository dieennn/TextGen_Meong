import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import {encryptedText} from "../../helper/secure.js"
import {authGoogle, keyLocalStorage} from "../../helper/environment.js"

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(
    public modalCtrl : ModalController,
    public navCtrl: NavController, 
    public viewCtrl : ViewController,
    public navParams: NavParams) {

      this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

      this.items = [];
      for(let i = 1; i < 11; i++) {
        this.items.push({
          title: 'Item ' + i,
          note: 'This is item #' + i,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }
  }

  itemTapped() {
    const localUser = localStorage.getItem(keyLocalStorage);
    if(localUser) {
      const data = JSON.parse(decryptedText(localUser));
      console.log(data)
    }
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  config() {
    return authGoogle
  }

  public loginGoogle(){
    initializeApp(this.config());
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      const strUser = JSON.stringify(result.user);
      localStorage.setItem(keyLocalStorage, encryptedText(strUser));

      this.closeModal();
      this.modalCtrl.create('ProfilePage').present();
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode)
      console.log(errorMessage)
      console.log(email)
      console.log(credential)
      // ...
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
