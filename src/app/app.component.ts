import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { VoteService } from '../service/vote.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  //rootPage: string = 'page-modal';

  pages: Array<{title: string, component: any}>;

  constructor(
    public vote: VoteService,
    public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    this.initializeApp();

    this.onVote()
    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: ' ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗ ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗ ͕͗🇽​͕͕͗͗🇽​͕͕͗͗🇽​͕͗  ', component: AboutPage }
    ];

  }

  
  async onVote(): Promise<void> {
    try {
      console.log(this.vote)
      const insert = {
        text_name: "test fe",
        like: true,
        unlike: false,
        user: {},
      }
      // const { data:dataCreate, error:errorCreate } = await this.vote.createVote(insert)
      const { data: dataGet, error: errorGet } = await this.vote.getVote()

      // console.log({dataCreate, errorCreate})
      console.log({dataGet, errorGet})
    } catch (error) {
      console.log('err', error)
    }
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
