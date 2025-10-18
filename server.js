const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'public','index.html');    
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
		let filePath = path.join(__dirname, 'dist', req.url);
		if (!fs.existsSync(filePath)) {
			filePath = path.join(__dirname, 'public', req.url);
		}
		fs.readFile(filePath, (err, content) => {
			if (err) {
				res.writeHead(404);
				res.end('File not found');
			} else {
				const extension = path.extname(filePath);
				const contentType = getContentType(extension);
				res.writeHead(200, { 'Content-Type': contentType });
				res.end(content);
			}
		});
  }
});

server.listen(port, () => {
  console.log(`K12: Server running on port ${port}`);
});

function getContentType(extension) {
  switch (extension) {
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.jpg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    default:
      return 'application/octet-stream';
  }
}