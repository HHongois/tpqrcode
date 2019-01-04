import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';

/**
 * Generated class for the LecturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecture',
  templateUrl: 'lecture.html',
})
export class LecturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public qrcode : QrCodeProvider) {
  }
  public scan() {
    this.qrcode.scanCode();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturePage');
  }

}
