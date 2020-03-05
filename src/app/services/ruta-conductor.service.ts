import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaConductorService {

  constructor() { }
  private ruta: string
  private conductor: string
  setRuta(ruta: string){
    this.ruta=ruta;
  }
  setConductor(conductor: string){
    this.conductor=conductor;
  }
  getRuta(): string{
    return this.ruta;
  }
  getConductor():string{
    return this.conductor;
  }
}
