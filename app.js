
const express = require('express');
const app = express();


app.use('/',(req, res, next) => {
    console.log("This always runs in common way");
    next();
})
app.use('/another-route',(req, res, next) => {
    console.log("This is another middleware");
    res.send('<h1>Hey, this is another route</h1>')
})
app.use('/',(req, res, next) => {
    console.log("This is another middleware");
    res.send('<h1>Hello from Prajwal</h1>')
})
app.listen(3000);