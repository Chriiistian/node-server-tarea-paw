const config = require("./dbconfig")

class TRANSPORTISTAS{
    constructor(id,nombre,Tipo_Transporte,telefono){
        this.idp=id;
        this.nombre=nombre;
        this.Tipo_Transporte=Tipo_Transporte;
        this.telefono=telefono;
    }
}

module.exports = TRANSPORTISTAS;