import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SauvegardeProvider } from '../../providers/sauvegarde/sauvegarde';

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  public data: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public store : SauvegardeProvider) {
    
  }

  public ionViewDidEnter(){
    
    this.store.getSauvegarde()
    .then(
      (result) => {
        console.log(result);
        this.data = result
      });
  
  }

}
