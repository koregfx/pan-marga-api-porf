const express = require('express');
const Pedido = require('../models/pedido');
const app = express();


app.get('/',(req, res)=>{
    Pedido.find({})
        .exec((err, pedidos)=>{
            if(err)
            {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok:true,
                pedidos
            });
        });
});

app.delete('/:_id',(req, res)=>{
    const id = req.params._id;
    console.log(id);
    Pedido.findOneAndDelete({ _id: id })
        .exec((err, pedidos)=>{
            if(err)
            {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok:true,
                pedidos
            })
        })
    
})
app.get('/:date',(req, res)=>{

    const date = req.params.date;
    console.log(date);
    Pedido.find({ fecha: date })
        .exec((err, pedidos)=>{
            if(err)
            {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok:true,
                pedidos
            })
        })
})

app.post('/',(req, res)=>{

    let body = req.body;
    let count = 1;
    Pedido.countDocuments({}, (err, cont)=>{
        if(err)
        {
            console.log(err);
        }
        count = cont;
        let pedido = new Pedido({
            nombre: body.nombre,
            fecha: body.fecha,
            pedidoId: count,
            pan: body.pan,
            precioTotal: body.precioTotal
        });
    
    
        pedido.save((err, pedidoDB) =>{
            if(err)
            {
                return res.status(400).json({
                    ok:false,
                    err
                })
            }
            res.json({
                ok: true,
                pedido: pedidoDB
            });
        });
    })
})


module.exports = app;