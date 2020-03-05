import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { IConductor } from '../models/iconductor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afdb: AngularFireDatabase) { }

  postConductor(conductor: IConductor){
    conductor.id=Date.now();
    return this.afdb.database.ref('conductores/'+conductor.id).set(conductor);
  }
  getConductor(id:string): Observable<any>{
    return this.afdb.object('conductores/'+id).valueChanges()
  }
  getConductores(){
    return this.afdb.list('conductores').valueChanges();
  }
  getConductorbyKeyValue(key: string, value: string): Observable<IConductor[]>{
    return this.afdb.list<IConductor>('conductores',
        ref=>ref.orderByChild(key).equalTo(value)).valueChanges()
  }
  putConductor(id: string, body){
    this.afdb.database.ref('conductores/'+id).set(body);
  }
  deleteConductor(id: string){
    this.afdb.database.ref('conductores/'+id).remove();
  }
}
