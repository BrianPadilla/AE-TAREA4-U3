//Pendiente importar app
const app = require('../server'); //importamos la configuración de app



//Ejecutando el servidor HTTP este modulo viene en el core de node.js
const server = require('http').Server(app);
const port = 3002;

//Ejecutando el servidor
server.listen(port);
console.log(`Running on port ${port}`);