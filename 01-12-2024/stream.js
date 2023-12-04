const fs = require("fs");

let read = '';
let counter = 1;
let readStream = fs.createReadStream("data/database.txt");

readStream.on("data", function(chunk) {

    read += "____" + chunk;
    console.log("Send chunk size: " + counter + " " + chunk.length);
    counter++
    // Send chunk
});

readStream.on("end", function() {
    console.log("Total: " + read.length);
    console.log("Counter: " + counter);
});

readStream.on("finish", (read) => {
    console.log("Finished reading stram data");
});

readStream.on('error', (error) => {
    console.log(error.stack);
});