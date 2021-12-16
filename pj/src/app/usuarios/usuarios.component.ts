import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaClientes: any [] = [];

  constructor(private _clienteService: ClientesService) {

    this._clienteService.getClientes().subscribe((data:any) => {
      this.listaClientes = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
