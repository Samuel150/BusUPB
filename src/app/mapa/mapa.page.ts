import { Component, OnInit, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
declare var google;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit {
  cont = 0;
  let=0.0001;
  len=0.0001;
  
  latitude: any;
  longitude: any;
  infoWindow = new google.maps.InfoWindow;
  marker=new google.maps.Marker;
  map;
  @ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;

  constructor(private firebaseService:FirebaseService,private geolocation: Geolocation) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude
      this.longitude=resp.coords.longitude
      this.map = new google.maps.Map(
        this.mapNativeElement.nativeElement,{
          center:{lat: this.latitude, lng: this.longitude},
          zoom: 15
        }
      );
      let pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      let icon = {
        url: 'assets/usuarioIcon.png',
        scaledSize: new google.maps.Size(50,50)
      }
      this.marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'Hola',
        icon: icon
      })
      //this.infoWindow.setPosition(pos);
      //this.infoWindow.setContent('<div style="height:auto; color:black; z-index:10">Location Found</div>')
      //this.infoWindow.open(this.map);
      this.map.setCenter(pos)
      //console.log(pos)
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.marker.setPosition(pos)
      this.firebaseService.getConductores().subscribe(
        res=>{
          //console.log(res)
        },error=>{
          //console.log(error)
        }
      )
      
    });
  }

}
