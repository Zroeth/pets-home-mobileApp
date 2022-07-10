const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "adminuwu", // update me
      password: "Salu2uwu" // update me
    },
    type: "default"
  },
  server: "holauwu.database.windows.net", // update me
  options: {
    database: "Hola", //update me
    encrypt: true
  }
};


const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `insert into Persons (
      PersonID ,
      LastName ,
      FirstName ,
      Address ,
      City 
  )
  Values (89,'Clara','Yema','305 - 14th Ave. S. Suite 3B Seatle,98128','USA');`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}