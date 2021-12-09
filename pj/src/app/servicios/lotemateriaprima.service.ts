import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotemateriaprimaService {

  constructor(private http: HttpClient) {
    console.log('Lotemateriaprima servicio listo...');
   }

   getLoteMateriaPrima(){
    return this.http.get('http://localhost:8091/LoteMateriaPrima');
  }
}
