import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportistasService {

  constructor(private http: HttpClient) {
    console.log('Transportistas servicio listo...');
   }

   getTransportistas(){
    return this.http.get('http://localhost:8091/TRANSPORTISTAS');
  }
}
