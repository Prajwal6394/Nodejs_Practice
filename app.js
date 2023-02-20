const http = require('http');

const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("In the middleware!");
    // This next function allow this first middle ware to go to the next middle ware for execution
    next();
})
app.use((req, res, next) => {
    console.log("This is another middleware");
})

const server = http.createServer(app);
server.listen(3000);