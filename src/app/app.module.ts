import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
//import { ListPage } from '../pages/list/list';
import { AboutPage } from "../pages/about/about";
//import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SupabaseService } from "./supabase.service";
import { VoteService } from "../service/vote.service";
import { UserService } from "../service/user.service";
import { FancytextService } from "../service/fancytext.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    AboutPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    AboutPage,
  ],
  providers: [
    SupabaseService,
    VoteService,
    UserService,
    FancytextService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
