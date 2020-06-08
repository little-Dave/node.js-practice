const http = require('http');

const server = http.createServer((req, resp) => {
  console.log(req);
  // process.exit();
  resp.setHeader('Content-Type', 'text/html');
  resp.write('<html>');
  resp.write('<head><title>Node</title></head>')
  resp.write('<body>a response?! *gasp*</body>')
  resp.write('</html>');
  resp.end();
});

server.listen(3000);