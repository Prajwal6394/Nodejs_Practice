const http = require('http');
const fs = require('fs');
// function rqListner(req, res){

// }

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head> <title>Message from server</title></head>')
        res.write('<body> <form action="/message" method="POST"> <input name = "message" type=text><button type="submit">Send</button> </form> </body>')
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data', (chucks) => {
            console.log(chucks);
            body.push(chucks);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const messageToBeloadedInTxtFile = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', messageToBeloadedInTxtFile);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html> <head> <title>Hello there</title></head> <body> <h1>Hello there, from nodejs server</h1> </body> </html>');
    res.end();
})
server.listen(3000);