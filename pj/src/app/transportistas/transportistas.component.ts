import { Component, OnInit } from '@angular/core';
import { TransportistasService } from '../servicios/transportistas.service';

@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html',
  styleUrls: ['./transportistas.component.css']
})
export class TRANSPORTISTASComponent implements OnInit {
  listaTransportistas: any [] = [];

  constructor(private _transportistaService: TransportistasService) {

    this._transportistaService.getTransportistas().subscribe((data:any) => {
      this.listaTransportistas = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
