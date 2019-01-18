import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  constructor(public navCtrl: NavController) {
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
}
