import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  //rootPage: string = 'page-modal';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: ' ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗ ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗ ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗  ', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  /*custom loading*/
  presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Loading Please Wait...'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(AboutPage);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
}
