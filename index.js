const http = require('http'),
  fileSystem = require('fs'),
  port = 4000,
  hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    fileSystem.readFile('./view/home.html', (error, data) => {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else if (request.url === '/about') {
    fileSystem.readFile('./view/about.html', (error, data) => {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else if (request.url === '/contact') {
    fileSystem.readFile('./view/contact.html', (error, data) => {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else {
    fileSystem.readFile('./view/error.html', (error, data) => {
      response.writeHead(404, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
