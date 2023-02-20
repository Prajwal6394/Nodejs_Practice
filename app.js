const http = require('http');

const express = require('express');
const app = express();
// function rqListner(req, res){

// }

const server = http.createServer(app);
server.listen(3000);