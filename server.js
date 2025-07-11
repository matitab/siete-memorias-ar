const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8443;

const options = {
  key: fs.readFileSync('C:/Users/Usuario/Desktop/Proyecto VR Ocho Historias/ocho-memorias-ar/certs/ocho-historias.duckdns.org-key.pem'),
  cert: fs.readFileSync('C:/Users/Usuario/Desktop/Proyecto VR Ocho Historias/ocho-memorias-ar/certs/ocho-historias.duckdns.org-chain.pem')
};

const esp32Ip = '192.168.1.122';

https.createServer(options, (req, res) => {
  console.log(req.method, req.url);

  if (req.url.startsWith('/led/')) {
    const espReq = http.request({
      hostname: esp32Ip,
      port: 80,
      path: req.url,
      method: req.method,
      headers: req.headers
    }, espRes => {
      res.writeHead(espRes.statusCode, espRes.headers);
      espRes.pipe(res);
    });

    espReq.on('error', (e) => {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error proxy: ' + e.message);
    });

    req.pipe(espReq);
    return;
  }

  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');

  const baseDir = path.join(__dirname, 'public');
  const fullPath = path.join(baseDir, filePath);

  const extname = path.extname(fullPath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.mind': 'application/octet-stream'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(fullPath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Archivo no encontrado');
      } else {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error interno del servidor: ' + error.code);
      }
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });

}).listen(port, () => {
  console.log('Servidor HTTPS corriendo en https://localhost:' + port);
});
