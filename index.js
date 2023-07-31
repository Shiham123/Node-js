const http = require('http'),
  fileSystem = require('fs'),
  port = 4000,
  hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
  const handleReadFile = (statusCode, location) => {
    fileSystem.readFile(location, (error, data) => {
      response.writeHead(statusCode, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  };

  if (request.url === '/') {
    handleReadFile(200, './view/home.html');
  } else if (request.url === '/about') {
    handleReadFile(200, './view/about.html');
  } else if (request.url === '/contact') {
    handleReadFile(200, './view/contact.html');
  } else {
    handleReadFile(404, './view/error.html');
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
