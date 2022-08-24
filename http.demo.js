const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello Kalyani here!</h1>');
    res.end();  // response send back to browser
}).listen(8080);

/**
 * 
 * GET
 * POST
 * DELETE
 * PUT
 * 
 * 
 * 200 -- Success
 * 300 -- Redirect
 * 400 -- Resources not found
 * 500 -- Internal Server Error
 * 
 */