const bodyParser = require('body-parser');
const express = require('express');
const wagner = require('wagner-core');

require('./models/models')(wagner);

//Importar ProductRouter

const brandRouter = require('./routers/brand.router')(wagner);

//configurando servidor express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/brands",brandRouter);

module.exports = app; //exportar la configuración del app