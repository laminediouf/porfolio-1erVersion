import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CompetenceServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competence-service',
  templateUrl: 'competence-service.html',
})
export class CompetenceServicePage {

  constructor(public navCtrl: NavController , public navParams: NavParams) {
  }


    ionViewDidLoad() {
        console.log('ionViewDidLoad CompetenceServicePage');
    }

 /*   showAlert() {
        const alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
*/

}
