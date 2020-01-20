import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    const config = {
      apiKey: 'AIzaSyBiXv9gwZz1Ncya5XbIfbXf8MtdvMIEck8',
      authDomain: 'certificationbakeli.firebaseapp.com',
      databaseURL: 'https://certificationbakeli.firebaseio.com',
      projectId: 'certificationbakeli',
      storageBucket: 'certificationbakeli.appspot.com',
      messagingSenderId: '1041081673329'
    };
    firebase.initializeApp(config);
  }

}
