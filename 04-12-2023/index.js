const http = require('http');
const options = {
    host: '127.0.0.1',
    port: '3000',
    path: '/index.html'
}

const callback = function(response) {

    let body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', async function() {
        console.log(body);

        // const call_api = await fetch("http://127.0.0.1:3000/contact-us.html");
        // const contact = await call_api.text();
        // console.log(contact);
    });
}

const request = http.request(options, callback);
request.end();