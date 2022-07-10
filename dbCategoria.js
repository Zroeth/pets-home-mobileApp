var config =require('dbdconfig');
const sql = require('mssql');


async function getCategoria(){
    try {
        let pool = await sql.connect(config);
        let categorias= await pool.request().query("select * from CuentaDonacion");
        return categorias.recordsets;

        
    } catch (error) {
        console.log("error uwu");
    }
}

async function insertCuenta(CuentaDonacion){
    try {
        let pool = await sql.connect(config);
        let insertC= await pool.request()
        .input('IDCuenta',sql.int,CuentaDonacion.IDCuenta)
        .input('NoCuenta',sql.VarChar(255),CuentaDonacion.NoCuenta)
        .input('Banco',sql.VarChar(255),CuentaDonacion.Banco)
        .input('TipoCuenta',sql.VarChar(255),CuentaDonacion.TipoCuenta)
        .execute("SP_Cuentas");
        
        
        return insertC.recordsets;

        
    } catch (error) {
        console.log("error uwu");
    }
}


module.exports ={
    getCategoria : getCategoria,
    getCategoriaID : getCategoriaID,
    insertCuenta: insertCuenta
}
