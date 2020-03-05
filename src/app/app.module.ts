import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDtjesEff6EOPz9US68g7F-mFfyegbfDSo",
  authDomain: "busupb-531f4.firebaseapp.com",
  databaseURL: "https://busupb-531f4.firebaseio.com",
  projectId: "busupb-531f4",
  storageBucket: "busupb-531f4.appspot.com",
  messagingSenderId: "84369779049",
  appId: "1:84369779049:web:7aafce644978e6b6d0b5f8",
  measurementId: "G-QGKHJVTQ66"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
