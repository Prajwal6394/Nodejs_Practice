const http = require('http');
const routes = require('./route');
// function rqListner(req, res){

// }

const server = http.createServer(routes);
server.listen(3000);