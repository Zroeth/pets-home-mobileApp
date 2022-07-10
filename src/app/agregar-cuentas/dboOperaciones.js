var  config = require('./sqltest');
const  sql = require('mssql');


async  function  getOrders() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Persons");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);

router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

  router.route('/Persons').get((request, response) => {
    Db.getOrders().then((data) => {
      response.json(data[0]);
    })
  })