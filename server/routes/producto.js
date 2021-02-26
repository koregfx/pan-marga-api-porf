const express = require('express');
const { findByIdAndUpdate, findByIdAndDelete } = require('../models/producto');
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
app.put('/:id', (req,res) =>{
    const id = req.params.id;
    let body = req.body;
    Producto.findById(id,(err,productUpdate)=>{
        if(err)
        {
            return res.status(400).json({
                ok:false,
                err
            })
        }
        productUpdate.nombre = body.nombre;
        productUpdate.precio = body.precio;
        productUpdate.distribuidor = body.distribuidor;
        productUpdate.save((error,saved)=>{
            if(error)
            {
                return res.status(400).json({
                    ok: false,
                    error
                })
            }
            res.json({
                ok:true,
                saved

        });
        })
    })
})
app.delete('/:id', (req,res) =>{
    const id = req.params.id;
    let body = req.body;
    Producto.findByIdAndDelete(id,(err, data)=>{
        if(err)
        {
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            deletedItem: data
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