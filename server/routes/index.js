const express = require('express');

const app = express();



app.use('/pedido', require('./pedido'));
app.use('/producto', require('./producto'));

module.exports=app;