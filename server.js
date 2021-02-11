const http = require('http');
const app1 = require('./app1');
const app = require('./app');

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

const app.get('/', (app: any, res) => {
    res.app
});

app.listen(443, () => {
    console.log('App is listening at http://'{ localhost }':$'{ port })
});

const app1.get('/', (app1:any, res) => {
    res.app
});

app1.listen(443, () => {
    console.log('App1 is listening at http://'{ localhost }':$'{ port })
});
