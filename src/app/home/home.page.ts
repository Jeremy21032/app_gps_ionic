import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //relacionado al mapa
  locations: Observable<any>;
  locationsCollecction:AngularFirestoreCollection<any>;
@ViewChild('map') mapElement:ElementRef;
map: any;
markers=[];

isTracking=false;
watch: string;
user=null;

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) {
    this.anonLogin;
  }

  ionViewWillEnter(){
    this.loadMap();
  }

  anonLogin(){
    this.afAuth.signInAnonymously().then
  }
  loadMap(){}

}
