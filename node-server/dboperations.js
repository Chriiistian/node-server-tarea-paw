//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var EMPLEADOS = require ('./EMPLEADOS');

async function getEMPLEADOS(){
    try{
        let pool = await sql.connect(config);
        let EMPLEADOS = await pool.request().query("select * from EMPLEADOS");
        return EMPLEADOS.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getLoteMateriaPrima(){
    try{
        let pool = await sql.connect(config);
        let LoteMateriaPrima = await pool.request().query("select * from LoteMateriaPrima");
        return LoteMateriaPrima.recordsets;
    }catch(error){
        console.log(error);
    }
}
module.exports={
    getEMPLEADOS : getEMPLEADOS,
    getLoteMateriaPrima : getLoteMateriaPrima     
}
