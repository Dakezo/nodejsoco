const http = require('http');
const http = require('./app1');
const http = require('./app');

const hostname = '172.23.18.80';
const port = 443;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Checking....Lunch Time.');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});