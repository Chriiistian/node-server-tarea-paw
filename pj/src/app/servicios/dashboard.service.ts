import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DashboardService {

    private ventas: Venta[]=[
        {
            nombre: "Elite admin",
            estado: "SALE",
            fecha: "April 18,2021",
            precio: 18
        },
        {
            nombre: "Real Homes WP Theme",
            estado: "EXTENDED",
            fecha: "April 19,2021",
            precio: 1250
        },
        {
            nombre: "Ample admin",
            estado: "EXTENDED",
            fecha: "April 19,2021",
            precio: 1250
        },
        {
            nombre: "Medical Pro WP Theme",
            estado: "TAX",
            fecha: "April 20,2021",
            precio: -24
        },
        {
            nombre: "Hosting press html",
            estado: "SALE",
            fecha: "April 21,2021",
            precio: 24
        },
        {
            nombre: "Digital Agency PSD",
            estado: "SALE",
            fecha: "April 23,2021",
            precio: -14
        },
        {
            nombre: "Helping Hands WP Theme",
            estado: "MEMBER",
            fecha: "April 22,2021",
            precio: 64
        }

    ];
    
    private coment: Comentario[]=[
        {
            nombre: "James Anderson",
            comentario: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            estate: "Pending",
            fecha: "April 14, 2021"
        },
        {
            nombre: "Michael Jorden",
            comentario: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            estate: "Approved",
            fecha: "April 14, 2021"
        },
        {
            nombre: "Johnathan Doeting",
            comentario: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            estate: "Rejected",
            fecha: "April 14, 2021"
        }

    ]

    private chats: Chat[]=[
        {
            nombre: "Varun Dhavan",
            estado: "online"
        },
        {
            nombre: "Genelia Deshmukh",
            estado: "Away"
        },
        {
            nombre: "Ritesh Deshmukh",
            estado: "Busy"
        },
        {
            nombre: "Arijit Sinh",
            estado: "Offline"
        },
        {
            nombre: "Govinda Star",
            estado: "online"
        },
        {
            nombre: "John Abraham",
            estado: "online"
        }
    ]


    
    constructor(private http: HttpClient){
        console.log("Servicio Dashboard listo para usarse...")
    }

    getVentas():Venta[]{
        return this.ventas;
    }
    
    getComentarios():Comentario[]{
        return this.coment;
    }
    
    getChats():Chat[]{
        return this.chats;
    }

    getEmpleados(){
        return this.http.get('http://localhost:8091/EMPLEADOS');
    }

    getLoteMateriaPrima(){
        return this.http.get('http://localhost:8091/LoteMateriaPrima');
    }

    getClientes(){
        return this.http.get('http://localhost:8091/CLIENTES');
    }

    getTransportistas(){
        return this.http.get('http://localhost:8091/TRANSPORTISTAS');
    }


}

export interface Venta{
    nombre: string;
    estado: string;
    fecha: string;
    precio: number;
};

export interface Comentario{
    nombre: string;
    comentario: string;
    estate: string;
    fecha: string;
};

export interface Chat{
    nombre: string;
    estado: string;
}

