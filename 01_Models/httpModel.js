const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/')
    {
        res.write("welcome");
        res.statusCode = 200;
        res.end();
    }else if (req.url === '/about')
    {
        res.end('Welcome in about page');
    }else {
        res.end('Error 404');
    }
});

server.listen(5000);