const http = require('http');

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(PORT, function () {
  console.log('Api listening on port:', PORT)
})