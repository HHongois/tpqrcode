import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import QRCode from 'qrcode'

//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the GenerationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html',
})
export class GenerationPage {
  msg: any;
  generated: string = '';
  inputCode = '';
  constructor(public navCtrl: NavController, public qrcode: QrCodeProvider, private socialSharing: SocialSharing) {
    this.msg = null;
  }

  public create() {
     QRCode.toDataURL(this.inputCode, { errorCorrectionLevel: 'H' }, (err, url) => this.generated = url);
     this.msg = this.generated;
  }

  regularShare(){
    this.socialSharing.share(null, null, this.msg, null);
  }

  whatsappShare(){
     this.socialSharing.shareViaWhatsApp(null, this.msg, null);
   }

   twitterShare(){
    this.socialSharing.shareViaTwitter(null, this.msg, null);
  }

  facebookShare(){
     this.socialSharing.shareViaFacebook(null,this.msg, null);
   }
 
}
