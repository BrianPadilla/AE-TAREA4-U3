const mongoose = require('mongoose');

//Construyendo el esquema
const brandSchema =  new mongoose.Schema({
    brands: {
        type: String,
        required: true
    }
});

//modelo 3 parámetros el primero como se llama en node
//el segundo el esquema, y el tercero como se llamará la colección en mongo

const brandModel = mongoose.model('Brand',brandSchema,'brands');

module.exports = brandModel;

