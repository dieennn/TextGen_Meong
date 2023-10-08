import { Component } from "@angular/core";
//import { NavController } from 'ionic-angular';
import { NavController, IonicPage } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { LoadingController } from "ionic-angular";

import { isLogin } from "../../helper/auth";
import { VoteInsert, VoteService } from "../../service/vote.service";
import { splitIdType, getUserLogin } from "../../helper/formatter";
import { UserInsert, UserService } from "../../service/user.service";
import {
  FancytextInsert,
  FancytextService,
} from "../../service/fancytext.service";

// import { Platform } from 'ionic-angular';
//import {Autosize} from 'angular2-autosize';
//import * as $ from 'jquery';
//import * as $ from 'autosize';
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home2.html",
})
export class HomePage {
  isLogin: boolean;

  constructor(
    public vote: VoteService,
    public user: UserService,
    public fancy: FancytextService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {
    /*platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);*/
  }

  async onVote(text_name: string, idText?: string): Promise<void> {
    try {
      const { uid, email, displayName, photoURL, ...user } = getUserLogin();
      const { id, type } = splitIdType(idText);

      const { data: dataFancytext, error: errorFancytext } =
        await this.fancy.getFancytext(id);
      const { data: dataUser, error: errorUser } = await this.user.getData(uid);
      const { data: dataVote, error: errorVote } = await this.vote.getVote(id);

      if (dataFancytext.length === 0) {
        const insertFancytext: FancytextInsert = {
          id_title: id,
          title: text_name,
          created_by: uid,
        };

        const { data: dataCreate, error: errorCreate } =
          await this.fancy.createFancytext(insertFancytext);
        console.log("create fancytext", { dataCreate, errorCreate });
      }

      if (dataUser.length === 0) {
        const insertUser: UserInsert = {
          uid: uid,
          email: email,
          display_name: displayName,
          photo_url: photoURL,
          detail: user,
        };
        const { data: dataCreate, error: errorCreate } =
          await this.user.createData(insertUser);
        console.log("create user", { dataCreate, errorCreate });
      }

      if (dataVote.length === 0) {
        // create
        const insertVote: VoteInsert = {
          upvote: type === 1,
          downvote: type === 0,
          user_uid: uid,
          fancy_text_id_title: id,
        };

        const { data: dataCreate, error: errorCreate } =
          await this.vote.createVote(insertVote);
        console.log("create vote", { dataCreate, errorCreate });
      } else {
        // update
        // like
        if (type === 1) {
          const { data: dataUpVote, error: errorUpVote } =
            await this.vote.upVote(id);
          console.log(dataUpVote);
        }
        // unlike
        if (type === 0) {
          const { data: dataDownVote, error: errorDownVote } =
            await this.vote.downVote(id);
          console.log(dataDownVote);
        }
      }
    } catch (error) {
      console.log("err", error);
    }
  }
  //readmore
  /*  toggle() {
  $ ('.moreContent').slideToggle();
  }*/
  //modal
  openModal() {
    var data = { message: "hello world" };
    var modalPage = this.modalCtrl.create("ModalPage", data);
    modalPage.present();
  }
  //modal
  //modal
  loginProfile() {
    if (isLogin()) {
      this.modalCtrl.create("ProfilePage").present();
    } else {
      this.modalCtrl.create("LoginPage").present();
    }
  }
  //modal

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    this.isLogin = isLogin();
  }
}
