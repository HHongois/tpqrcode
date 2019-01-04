import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SauvegardeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SauvegardeProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello SauvegardeProvider Provider');
  }
  public addCode(details: string) {
    //this.removeAll();
    if (details !== "") {
      var date = new Date();
      console.log(details);
      this.storage.set(details.concat(date.toDateString()), details.toString().concat(' , ', date.toDateString()));
    }

  }

  // public removeFavoris(details: Object) {
  //   this.storage.remove(details['imdbID']);
  // }

  public removeAll() {
    this.storage.forEach((value, key, index) => {
      this.storage.remove(key);
    });
  }
  public getSauvegarde() {
    let tab1: Array<Object> = [];

    return this.storage.forEach((value, key, index) => {
      tab1.push(this.storage.get(key).then(result => result))
    }).then(() => {
      return Promise.all(tab1)
    })

  }
}
