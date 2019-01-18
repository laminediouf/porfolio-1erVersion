import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';

export interface PageInterface{
    title:string;
    pageName:string;
    tabComponent?:any;
    index?:number;
    icon:string;
}
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    rootPage='TabsPage';

    @ViewChild(Nav) nav:Nav;

    pages:PageInterface[]=[
        {title:'Realisation',pageName:'TabsPage',tabComponent:'RealisationPage',index:0,icon:'Realisation'},
        {title:'Competence ',pageName:'TabsPage',tabComponent:'CompetenceServicePage',index:1,icon:'Competence'},
        {title:'Bloc_Ld',pageName:'TabsPage',tabComponent:'BlocLdPage',index:2,icon:'Bloc'},
        {title:'Contact',pageName:'TabsPage',tabComponent:'ContactPage',index:3,icon:'Contact'},
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    openPage(page:PageInterface){
      let params={};

      if(page.index){
          params={ tabIndex:page.index}
      }
      if (this.nav.getActiveChildNav() && page.index !=undefined){
          this.nav.getActiveChildNav().select(page.index)
      }else {
          this.nav.setRoot(page.pageName,params);
      }

    }

    isActive(page:PageInterface) {
        let childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return '';
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    }
}
