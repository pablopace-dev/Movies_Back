const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();                              //Servidor
const port = process.env.PORT;

app.use(cors());                                    //Cors
app.use(express.static(__dirname + '/public'));     //Carpeta static

app.set('view engine', 'ejs');                      //Template engine
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: false }))    // Parse application/x-www-form-urlencoded
app.use(express.json())                             // Parse application/json

//Conexión

//Rutas

//404


//Listener
app.listen(port, () => console.log(`Server listening on port ${port}...`))