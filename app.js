const http = require('http');

// function rqListner(req, res){

// }

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
    res.write('<html>');
    res.write('<head> <title>Message from server</title></head>')
    res.write('<body> <form action="/message" method=""POST> <input type=text><button type="submit">Send</button> </form> </body>')
    return res.end();
}
    res.setHeader('Content-type', 'text/html');
    res.write('<html> <head> <title>Hello there</title></head> <body> <h1>Hello there, from nodejs server</h1> </body> </html>');
    res.end();
})
server.listen(3000);