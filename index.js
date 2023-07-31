const httpModule = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const serverOne = httpModule.createServer((request, response) => {
  response.writeHead(202, { 'content-type': 'text/html' });
  response.write(
    '<h1>this is my first node js tutorial with anisul islam sir</h1>'
  );
  response.end();
});

serverOne.listen(port, hostname, () => {
  console.log(
    `your server is running localhost at: http://${hostname}:${port}`
  );
});
