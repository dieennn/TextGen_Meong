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
        instagram: 'bimoajinugh',
        whatsapp: '+6285780858000',
        whatsappText: 'Bim',
        sms: '+62 857 8085 8000',
        tel: '+62 857 8085 8000',
        mail: 'email@domain.com'
      },
      {
        id: 2,
        nama: 'Me',
        instagram: 'dien.anka',
        whatsapp: '+62 896 6830 0626',
        whatsappText: 'Me',
        sms: '+62 896 6830 0626',
        tel: '+62 896 6830 0626',
        mail: 'email@domain.comemail@domain.com'
      },
      {
        id: 3,
        nama: 'Radityo',
        instagram: 'radit_prasojo',
        whatsapp: '+62 856 4756 2813',
        whatsappText: 'Mbah',
        sms: '+62 856 4756 2813',
        tel: '+62 856 4756 2813',
        mail: 'email@domain.com'
      },
      {
        id: 4,
        nama: 'Gilang',
        instagram: 'gilang_adisetyo',
        whatsapp: '+62 856 4724 7592',
        whatsappText: 'Lang',
        sms: '+62 856 4724 7592',
        tel: '+62 856 4724 7592',
        mail: 'email@domain.com'
      },
      {
        id: 5,
        nama: 'Yuli',
        instagram: 'yuli01ridwan',
        whatsapp: '+62 857 2549 5330',
        whatsappText: 'Yul',
        sms: '+62 857 2549 5330',
        tel: '+62 857 2549 5330',
        mail: 'email@domain.com'
      }
    ];
    
      async function randomQuote(i) {
        const response = await fetch('https://api.quotable.io/random')
        const quote = await response.json()

        let rand = Math.floor(Math.random() * 2020);
        let lsData = `
          <ion-item class="item item-block item-md" style="">
            <ion-avatar item-start="">

              <img onClick="alert('hehe')" src="https://robohash.org/${rand+data[i].id}.png?set=set4">

            </ion-avatar>
            <div class="item-inner">
              <div class="input-wrapper">
                <ion-label class="label label-md">

                  <h2>${data[i].nama}</h2>
                  <p>${quote.content} —${quote.author}</p>

                </ion-label>
              </div>
            </div>
          </ion-item>
            
          <ion-item-options side="right">
          <a href="sms:+62 857 8085 8000">
          <button ion-button color="primary">
            <ion-icon name="text"></ion-icon>
            Text
          </button>
          </a>
          <a href="tel:+62 857 8085 8000">
          <button ion-button color="secondary">
            <ion-icon name="call"></ion-icon>
            Call
          </button>
          </a>
          <a href="mailto:email@domain.com">
          <button ion-button color="primary">
            <ion-icon name="mail"></ion-icon>
            Email
          </button>
          </a>
        </ion-item-options>

          <ion-item-options side="left" ng-reflect-side="left">
              <a href="https://www.instagram.com/${data[i].instagram}/">
                <button color="dark" ion-button="" outline="" ng-reflect-color="dark" ng-reflect-outline=""
                  class="button button-md button-outline button-outline-md button-outline-md-dark"><span
                    class="button-inner">
                    <ion-icon item-start="" name="logo-instagram" role="img" style="color: #d03e84"
                      class="icon icon-md ion-logo-instagram" aria-label="logo instagram"
                      ng-reflect-name="logo-instagram"></ion-icon> &nbsp;IG&nbsp;
                  </span>
                  <div class="button-effect"></div>
                </button> </a> <a href="https://api.whatsapp.com/send?phone=${data[i].whatsapp}&text=${data[i].whatsappText}, ?"> <button
                  color="dark" ion-button="" outline="" ng-reflect-color="dark" ng-reflect-outline=""
                  class="button button-md button-outline button-outline-md button-outline-md-dark"><span
                    class="button-inner">
                    <ion-icon item-start="" name="logo-whatsapp" role="img" style="color: #0ef531"
                      class="icon icon-md ion-logo-whatsapp" aria-label="logo whatsapp" ng-reflect-name="logo-whatsapp">
                    </ion-icon> WA
                  </span>
                  <div class="button-effect"></div>
                </button>
              </a>
            </ion-item-options>
        `;
        let nodeData = document.createElement('ion-item-sliding');
        nodeData.className = 'item-wrapper';
        nodeData.innerHTML = lsData;
        document.getElementsByTagName('ion-list')[1].appendChild(nodeData);
      }
      
    for(let i = 0; i<data.length; i++) {
      randomQuote(i)
      console.log(data[i])
    }
  }

}
