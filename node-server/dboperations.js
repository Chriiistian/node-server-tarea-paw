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
/*
 Procedimiento : agregar EMPLEADOS
async function addEMPLEADOS(EMPLEADOS){
    try{
        let pool = await sql.connect(config);
        let insertarEMPLEADOS = await pool.request()
            .input('nombre', sql.VARCHAR, EMPLEADOS.EMP_nombre)
            .input('area', sql.VARCHAR, EMPLEADOS.EMP_area)
            .output('Agregado',sql.Int,1)
            .execute('agregarEMPLEADOS');
        return insertarEMPLEADOS.recordsets;
    }
    catch (err){
        console.log(err);
    }
}
 Procedimiento : agregar EMPLEADOS
async function addCLIENTES(CLIENTES){
    try{
        let pool = await sql.connect(config);
        let insertarCLIENTES = await pool.request()
            .input('nombre', sql.VarChar, CLIENTES.CL_nombre)
            .input('sexo', sql.VarChar, CLIENTES.CL_sexo)
            .input('ciudad',sql.VarChar,CLIENTES.CL_ciudad)
            .output('Agregado',sql.Int,1)
            .execute('agregarCLIENTES');
        return insertarCLIENTES.recordsets;
    }
    catch (err){
        console.log(err);
    }
}
*/
module.exports={
    getEMPLEADOS : getEMPLEADOS,
    getLoteMateriaPrima : getLoteMateriaPrima,
    getCLIENTES : getCLIENTES,
    getTRANSPORTISTAS : getTRANSPORTISTAS,   
    
   /* addCLIENTES  : addCLIENTES,
    addEMPLEADOS : addEMPLEADOS
    */
}
