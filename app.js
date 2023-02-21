
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shop = require('./routes/shop');
const adminRotes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRotes);
app.use(shop);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


app.listen(3000);