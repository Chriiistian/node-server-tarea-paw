import { Component, OnInit } from '@angular/core';
import { LotemateriaprimaService } from '../servicios/lotemateriaprima.service';

@Component({
  selector: 'app-lote-materia-prima',
  templateUrl: './lote-materia-prima.component.html',
  styleUrls: ['./lote-materia-prima.component.css']
})
export class LoteMateriaPrimaComponent implements OnInit {
  listaLotemateriaprima: any [] = [];

  constructor(private _lotemateriaprimaService: LotemateriaprimaService) {

    this._lotemateriaprimaService.getLoteMateriaPrima().subscribe((data:any) => {
      this.listaLotemateriaprima = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
