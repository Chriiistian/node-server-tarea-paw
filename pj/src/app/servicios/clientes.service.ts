import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
    console.log('Empleados servicio listo...');
   }

   getClientes(){
    return this.http.get('http://localhost:8091/CLIENTES');
  }
}
