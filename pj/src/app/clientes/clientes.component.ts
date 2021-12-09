import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class CLIENTESComponent implements OnInit {
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
