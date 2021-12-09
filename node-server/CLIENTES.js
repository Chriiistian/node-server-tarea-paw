const config = require("./dbconfig")

class CLIENTES{
    constructor(id,nombre,sexo,ciudad){
        this.id=id;
        this.nombre=nombre;
        this.sexo=sexo;
        this.ciudad=ciudad;
    }
}

module.exports = CLIENTES;