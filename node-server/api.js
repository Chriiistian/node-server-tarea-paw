var db = require('./dboperations');
var EMPLEADOS = require('./EMPLEADOS');

const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
const { prototype } = require('./EMPLEADOS');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})

async function obtenerEMPLEADOS(request,response){
    var resultado = await dboperations.getEMPLEADOS();
    response.send(resultado);    
 }
app.get('/EMPLEADOS', obtenerEMPLEADOS)

async function obtenerLoteMateriaPrima(request,response){
    var resultado = await dboperations.getLoteMateriaPrima();
    response.send(resultado);    
 }
app.get('/obtenerLoteMateriaPrima', obtenerLoteMateriaPrima)

var port = process.env.PORT || 8091;
app.listen(port);
console.log(' La API esta corriendo en el puerto: '+port);