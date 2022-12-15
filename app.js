const http = require('http');

// function rqListner(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-type', 'text/html');
    res.write('<html> <head> <title>Hello there</title></head> <body> <h1>Hello there, from nodejs server</h1> </body> </html>');
    res.end();
})
server.listen(3000);