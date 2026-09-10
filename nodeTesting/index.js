const http = require('node:http');
const fs = require("node:fs");
const { type } = require('node:os');
const { loadEnvFile } = require("node:process")
loadEnvFile();
const server = http.createServer((req, res) => {
    if(req.url == "/" || req.url == "/index") {
        try {
            const data = fs.readFileSync('./index.html')
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end("Error Occured, Please Refresh")
        }
    } else if (req.url == '/contact-me') {
        try {
            const data = fs.readFileSync('./contact-me.html')
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end("Error Occured, Please Refresh")
        }
    } else if (req.url == '/about') {
        try {
            const data = fs.readFileSync('./about.html')
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end("Error Occured, Please Refresh")
        }
    } else if (req.url == '/yt') {
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(process.env.WATCH)
    }else {
        try {
            const data = fs.readFileSync('./404.html')
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end("Error Occured, Please Refresh")
        }
    }
});
server.listen(8080);