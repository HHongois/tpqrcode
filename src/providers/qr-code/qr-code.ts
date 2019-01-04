import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(public http: HttpClient,private barcodeScanner: BarcodeScanner) {
    console.log('Hello QrCodeProvider Provider');
  }
  public getData(){
    return this.qrData;
  }
  public getCreatedCode(){
    return this.createdCode;
  }
  public getScannedCode(){
    return this.scannedCode;
  }

  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  generate(text: string): Promise<string> {
    //TODO: Code this
    return Promise.resolve('');
  }

}
