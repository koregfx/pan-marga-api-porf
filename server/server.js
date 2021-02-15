require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/index'));
app.get('/', (req,res)=>{
    res.json('hola mundo')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

app.listen( process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});