const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/**
Method listen() dapat menerima 4 parameter, berikut detailnya:
port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
 */