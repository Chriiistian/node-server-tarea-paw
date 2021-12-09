import { Component, OnInit } from '@angular/core';
import { DashboardService , Venta, Comentario, Chat} from '../servicios/dashboard.service';

/*import { EmpleadosService } from '../servicios/empleados.service';
import { ClientesService } from '../servicios/clientes.service';
import { LotemateriaprimaService } from '../servicios/lotemateriaprima.service';
import { TransportistasService } from '../servicios/transportistas.service';*/

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ventas:Venta[]=[];
  coment:Comentario[]=[];
  chats:Chat[]=[];
  listaEmpleados: any [] = [];
  listaLotemateriaprima: any [] = [];
  listaClientes: any [] = [];
  listaTransportistas: any [] = [];
  /*
  listaClientes: any [] = [];
  listaLoteMateriaPrima: any [] = [];
  listaTransportistas: any [] = [];*/

  constructor(private _dashboardService: DashboardService/*, private _empleados: EmpleadosService, private _lotemateriaprima: LotemateriaprimaService, private _cliente: ClientesService, private _transportista: TransportistasService*/) {
    console.log("creando el componente dashboard..")
    console.log(_dashboardService.getVentas());
    this.ventas=_dashboardService.getVentas();
    console.log(this.ventas[0].nombre);

    console.log(_dashboardService.getComentarios());
    this.coment=_dashboardService.getComentarios();
    console.log(this.coment[0].nombre);

    console.log(_dashboardService.getChats());
    this.chats=_dashboardService.getChats();
    console.log(this.chats[0].nombre);

    this._dashboardService.getEmpleados().subscribe( (data:any) => {
      this.listaEmpleados = data;
      console.log(data);
    })

    this._dashboardService.getLoteMateriaPrima().subscribe( (data:any) => {
      this.listaLotemateriaprima = data;
      console.log(data);
    })

    this._dashboardService.getClientes().subscribe( (data:any) => {
      this.listaClientes = data;
      console.log(data);
    })

    this._dashboardService.getTransportistas().subscribe( (data:any) => {
      this.listaTransportistas = data;
      console.log(data);
    })

    /*console.log(_empleados.getEmpleados());
    this.listaEmpleados=_empleados.getEmpleados();
    console.log(this.listaEmpleados[0].nombre);

    console.log(_lotemateriaprima.getLoteMateriaPrima());
    this.listaLoteMateriaPrima=_lotemateriaprima.getLoteMateriaPrima();
    console.log(this.listaLoteMateriaPrima[0].nombre);

    console.log(_cliente.getClientes());
    this.listaClientes=_cliente.getClientes();
    console.log(this.listaClientes[0].nombre);

    console.log(_transportista.getTransportistas());
    this.listaTransportistas=_transportista.getTransportistas();
    console.log(this.listaTransportistas[0].nombre);*/
   }

  ngOnInit(): void {
  }

}
