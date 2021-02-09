const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let panSchema = new Schema({   
    nombre: String,
    precio: Number,
    cantidad: Number
});
let pedidoSchema = new Schema({
    pedidoId: {
        type: Number,
        required: [true],
        default: 1
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es necesaria']
    },
    pedidos:[panSchema],
    precioTotal: 
    {
        type: Number,
        required: [true, 'El precio es necesario']
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema);