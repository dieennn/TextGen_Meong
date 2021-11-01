import { initializeApp } from "@firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    public viewCtrl : ViewController,
    public navParams: NavParams) {
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  public logoutGoogle(){
    initializeApp({
      apiKey: "AIzaSyBh1P3vwAMriN1GtYzt1-o32N0HMmVyBrA",
      authDomain: "sidemenu-703cc.firebaseapp.com",
      databaseURL: "https://sidemenu-703cc.firebaseio.com",
      projectId: "sidemenu-703cc",
      storageBucket: "sidemenu-703cc.appspot.com",
      messagingSenderId: "721543360739",
      appId: "1:721543360739:web:3f3bbae1ca6603bd",
    });
    const auth = getAuth();
    
    signOut(auth).then(() => {
      localStorage.removeItem("uid");
      this.viewCtrl.dismiss();
    }).catch((error) => {
      console.log("error")
    });
  }

  public loginGoogle(){
    initializeApp({
      apiKey: "AIzaSyBh1P3vwAMriN1GtYzt1-o32N0HMmVyBrA",
      authDomain: "sidemenu-703cc.firebaseapp.com",
      databaseURL: "https://sidemenu-703cc.firebaseio.com",
      projectId: "sidemenu-703cc",
      storageBucket: "sidemenu-703cc.appspot.com",
      messagingSenderId: "721543360739",
      appId: "1:721543360739:web:3f3bbae1ca6603bd",
    });
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(credential)
      console.log(token)
      console.log(user)
      console.log(result)
      localStorage.setItem("uid", user.uid)
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
