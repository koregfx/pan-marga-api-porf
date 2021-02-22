const express = require('express');
const Pedido = require('../models/pedido');
const app = express();


app.get('/',(req, res)=>{
    Pedido.find({ activo: true})
        .sort({pedidoId : -1})
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
    Pedido.findOneAndUpdate({ _id: id },{activo: false })
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
    Pedido.find({ fecha: date, activo: true })
        .sort({pedidoId : -1})  
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
    Pedido.find({})
        .sort({pedidoId : -1})
        .limit(1)
        .exec((err,data)=>{
            if(err){
                res.status(400).json({
                    ok:false,
                    err
                })
            }
            if(data[0] == undefined)
            {
                count = 1;
            }
            else{
                count = data[0].pedidoId + 1; 
            }
            
            let pedido = new Pedido({
                nombre: body.nombre,
                fecha: body.fecha,
                pedidoId: count,
                productos: body.productos,
                precioTotal: body.precioTotal
            });
        
            pedido.save((error, pedidoDB) =>{
                if(error)
                {
                    return res.status(400).json({
                        ok:false,
                        error
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