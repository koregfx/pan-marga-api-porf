const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let productoSchema = new Schema({   
    nombre: {type: String,required: [true]},
    precio: {type: Number,required: [true]},
    distribuidor: {type: String,required: [true]}
});
module.exports = mongoose.model('Producto', productoSchema);
