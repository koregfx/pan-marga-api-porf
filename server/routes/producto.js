const express = require('express');
const Producto = require('../models/producto');
const app = express();




app.get('/', (req,res) =>{
    Producto.find({})
        .exec((err,productos)=>{
            if(err)
            {
                return res.status(400).json({
                    ok:false,
                    err
                })
            }
            res.json({
                ok:true,
                productos
            })
        })
})
app.post('/', (req,res) =>{

    let body = req.body;

    let producto= new Producto({
        nombre: body.nombre,
        precio: body.precio,
        distribuidor: body.distribuidor
    });
    producto.save((err, productoDB)=>{
        if (err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            productoDB
        })
    });

})





module.exports = app;