import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHeN-Y9QA6dKHP9mYPF93yHXFDL-4o4nU",
  authDomain: "to-do-mat2.firebaseapp.com",
  databaseURL: "https://to-do-mat2.firebaseio.com/",
  storageBucket: "to-do-mat2.appspot.com"
}
const AuthenticationConfig = {
  method: AuthMethods.Popup,
  provider: AuthProviders.Google
 }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, AuthenticationConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
