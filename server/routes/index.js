const express = require('express');

const app = express();



app.use('/pedido', require('./pedido'));

module.exports=app;