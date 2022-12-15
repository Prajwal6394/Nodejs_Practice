const http = require('http');

// function rqListner(req, res){

// }

const server = http.createServer((req, res) => {
    console.log('here is my first nodejs server', req);
})
server.listen(3000);