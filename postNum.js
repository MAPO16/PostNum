const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.post('/rest/numero',  (req, res, ) => { 

   //Body
   var Id_NumSer  = req.body;
   var Numero_Serie = req.body;
   var Id_Descripcion = req.body;
  var Id_Articulo  = req.body;
   var Id_Area = req.body;
   var Id_Inmueble = req.body;
   
   
   

      //conexion
   connection.query('INSERT INTO Num_Serie SET ?', [Id_NumSer,Numero_Serie,Id_Descripcion,Id_Articulo,Id_Area,Id_Inmueble],
  (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(2368, function () {
 console.log('Node app is running on port 2368');

});