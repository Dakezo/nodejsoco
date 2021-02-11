const http = require('http');
const app = require('app1.js');
const app = require('app.js');

const hostname = '172.23.18.80';
const port = 443;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});