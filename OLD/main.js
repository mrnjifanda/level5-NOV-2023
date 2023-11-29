const http = require("http");
const math = require("./math");
// const { area } = require("./math");

http.createServer(function (request, response) {

    const url = request.url; // Get path in browser url

    let code = 200;
    let message = "404 Not found !!!";
    console.log(url);
    if (url == "/") {

        const area = math.area(12);
        message = "Index (" + area + ")";
        // message = "Index (" + area(12) + ")";
    } else if (url == "/about-us") {
        message = "About us";
    } else if (url == "/contact-us") {
        message = "Cntact us";
    } else {
        code = 404;
    }

    response.writeHead(code, {  "Content-Type": "text/plain" });

    response.end(message);
}).listen(3000);