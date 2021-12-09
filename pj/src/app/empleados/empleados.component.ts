import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EMPLEADOSComponent implements OnInit {
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