const dbcategoria = require ('dbCategoria');

var express = require ('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

var cuenta = require('CuentaDonacion');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

//get
router.route('/cuentas').get((request,response)=>{
    dbcategoria.getCuenta().then(result =>{
        response.json(result[0]);
    })
})


//getNoCuenta

router.route('/cuentas/:id').get((request,response)=>{
    dbcategoria.getCuentaID(request.params.id).then(result =>{
        response.json(result[0]);
    })
})


//postCuenta

router.route('/cuentas/agregar').post((request,response)=>{
    let cuenta ={...request.body}
    dbcategoria.insertCuenta(cuenta).then(result =>{
        response.json(result[0]);
    })
})


//update

router.route('/cuentas/modificar').post((request,response)=>{
    let cuenta ={...request.body}
    dbcategoria.updateCuenta(cuenta).then(result =>{
        response.json(result[0]);
    })
})

//delete

router.route('/cuentas/borrar/:id').get((request,response)=>{
    dbcategoria.deleteCuenta(request.params.id).then(result =>{
        response.json(result[0]);
    })
})





var port = process.env.port || 8090;
app.listen(port);
console.log('iniciando');