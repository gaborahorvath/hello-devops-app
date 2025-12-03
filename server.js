const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world - DevOps App! A konténer fut!');
});

server.listen(port, () => {
  console.log(`Server fut: http://localhost:${port}`);
});