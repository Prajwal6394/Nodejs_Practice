const express = require('express');

const app = express();

app.use('/userfun',(req, res, next) =>{
    console.log('This is another route!!');
    res.send('<p>Assigment done</p>');
})
app.use('/',(req, res, next) =>{
    console.log('First middle ware !!');
})

app.listen('3000');