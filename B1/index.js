import http from "node:http"

http
    .createServer((request, response) => {
        response.writeHead(200, {
            "Content-Type": 'text/html; charset=utf-8'
        });
        response.write('<h1>Hello, Bình An !</h1>');
        response.end();

    })
    .listen(2000);