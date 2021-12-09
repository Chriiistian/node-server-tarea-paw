//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var EMPLEADOS = require ('./EMPLEADOS');

/*Tabla 1*/
async function getEMPLEADOS(){
    try{
        let pool = await sql.connect(config);
        let EMPLEADOS = await pool.request().query("select * from EMPLEADOS");
        return EMPLEADOS.recordsets;
    }catch(error){
        console.log(error);
    }
}
/*Tabla 2*/
async function getLoteMateriaPrima(){
    try{
        let pool = await sql.connect(config);
        let LoteMateriaPrima = await pool.request().query("select * from LoteMateriaPrima");
        return LoteMateriaPrima.recordsets;
    }catch(error){
        console.log(error);
    }
}
/*Tabla 3*/
async function getCLIENTES(){
    try{
        let pool = await sql.connect(config);
        let CLIENTES = await pool.request().query("select * from CLIENTES");
        return CLIENTES.recordsets;
    }catch(error){
        console.log(error);
    }
}
/*Tabla 4*/
async function getTRANSPORTISTAS(){
    try{
        let pool = await sql.connect(config);
        let TRANSPORTISTAS = await pool.request().query("select * from TRANSPORTISTAS");
        return TRANSPORTISTAS.recordsets;
    }catch(error){
        console.log(error);
    }
}
module.exports={
    getEMPLEADOS : getEMPLEADOS,
    getLoteMateriaPrima : getLoteMateriaPrima,
    getCLIENTES : getCLIENTES,
    getTRANSPORTISTAS : getTRANSPORTISTAS     
}
