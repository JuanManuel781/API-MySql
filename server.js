const express = require('express');
const sequelize = require('./database/usuarios');
const user = require ('./api/user');

const bodyParser=require('body-parser');
const { error, Console } = require('console');

const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.json());
app.use("/api/user", user);

/*//MySql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'usuarios'
  });


//check conection 
connection.connect(error =>{
    if (error) throw error;
    console.log('!Database Server running!');
});
*/

app.listen(PORT, function(){
    console.log('!Server running http://localhost:${PORT}');

    //conectarse a la base de datos 
    sequelize.authenticate()
    .then(() => {
    console.log('Conectado')
    })
    .catch(err => {
    console.log('No se conecto')
    })
})

//route
//app.get('/', (req, res))