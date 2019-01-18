import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlocLdProvider} from "../../providers/bloc-ld/bloc-ld";

/**
 * Generated class for the BlocLdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloc-ld',
  templateUrl: 'bloc-ld.html',
})
export class BlocLdPage {
    article: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public BlocLdProvider:BlocLdProvider) {
      this.displayArticle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocLdPage');
  }

    displayArticle()
    {
        this.BlocLdProvider.displayArticle()
            .then(data=>
            {
                this.article = data;
                console.log(this.article);
            })
    }

}
