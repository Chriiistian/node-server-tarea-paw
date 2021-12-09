import { Injectable } from "@angular/core";

@Injectable()

export class BasictableService{

    private tablas: Tabla[]=[
        {
            nombre: "Deshmukh",
            apellido: "Prohaska",
            usuario: "@Genelia",
            rol: "admin"
        },
        {
            nombre: "Deshmukh",
            apellido: "Gaylord",
            usuario: "@Ritesh",
            rol: "member"
        },
        {
            nombre: "Sanghani",
            apellido: "Gusikowski",
            usuario: "@Govinda",
            rol: "developer"
        },
        {
            nombre: "Roshan",
            apellido: "Rogahn",
            usuario: "@Hritik",
            rol: "supporter"
        },
        {
            nombre: "Joshi",
            apellido: "Hickle",
            usuario: "@Maruti",
            rol: "member"
        },
        {
            nombre: "Nigam",
            apellido: "Eichmann",
            usuario: "@Sonu",
            rol: "supporter"
        }
    ]

    constructor(){
        console.log("Servicio Dashboard listo para usarse...")
    }

    getTablas():Tabla[]{
        return this.tablas;
    }
}

export interface Tabla{
    nombre: string;
    apellido: string;
    usuario: string;
    rol: string;
}