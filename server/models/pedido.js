const mongoose = require('mongoose');
let Schema = mongoose.Schema;

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
    productos:[{
        _id: {type: Schema.Types.ObjectId, ref: 'Producto'},
        cantidad: Number
    }],
    precioTotal: 
    {
        type: Number,
        required: [true, 'El precio es necesario']
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema);