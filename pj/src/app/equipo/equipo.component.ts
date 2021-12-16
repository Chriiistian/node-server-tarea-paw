import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  listaEmpleados: any [] = [];

  constructor(private _empleadoService: EmpleadosService) {

    this._empleadoService.getEmpleados().subscribe((data:any) => {
      this.listaEmpleados = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
