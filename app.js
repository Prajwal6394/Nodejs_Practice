
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shop = require('./routes/shop');
const adminRotes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRotes);
app.use(shop);


app.listen(3000);