import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetenceServicePage } from './competence-service';

@NgModule({
  declarations: [
    CompetenceServicePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetenceServicePage),
  ],
})
export class CompetenceServicePageModule {}
