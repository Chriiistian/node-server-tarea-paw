const config = require("./dbconfig")

class EMPLEADOS{
    constructor(id_emp,nombre,area){
        this.id_emp=id_emp;
        this.nombre=nombre;
        this.area=area;
    }
}

module.exports = EMPLEADOS;