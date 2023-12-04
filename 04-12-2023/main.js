const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

http.createServer(function(request, response) {

    const pathname = url.parse(request.url).pathname;
    console.log("Request: " + pathname);

    const path_url = pathname.substring(1);
    const real_path = path_url == '' ? 'index.html' : path_url;
    fs.readFile(`views/${ real_path }`, function(error, data) {

        if (error) {

            console.log(error);
            response.writeHead(404, {'Content-Type': 'text/html'}); 
        } else {

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }

        response.end();
    });
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
