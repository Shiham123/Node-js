const http = require('http'),
  port = 4000,
  hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
  response.end('welcome to the demo server');
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
