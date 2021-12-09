import { Component, OnInit } from '@angular/core';
import { BasictableService , Tabla} from '../servicios/basictable.service';

@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styleUrls: ['./basictable.component.css']
})

export class BasictableComponent implements OnInit {
  tablas:Tabla[]=[];

  constructor(private _basictableService: BasictableService) {
    console.log("creando el componente basictable..")
    console.log(_basictableService.getTablas());
    this.tablas=_basictableService.getTablas();
    console.log(this.tablas[0].nombre);
    
  }

  ngOnInit(): void {
  }

}