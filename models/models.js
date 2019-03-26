const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    //conexión a mongo como la pide a partir de la v5
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dbbrands',{useNewUrlParser:true});

wagner.factory('db', ()=> mongoose);
  //el nombre de la variable es db, y la conexión es mongoose

  const Brand = require('./brand.model');
  

  const models = {
     Brand
  }
  _.each(models,(v,k)=>{
    wagner.factory(k, ()=>v);
});

}//fin wagner



