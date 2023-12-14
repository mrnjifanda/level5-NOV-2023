const fs = require("fs");

// fs.open("hello.txt", 'w+', (error, data) => {

//     if (error) return console.log(error.message);

//     console.log(data);
//     console.log("Saved!!!");
// });

fs.stat('hello.txt', (error, stats) => {

    if (error) return console.log(error);

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.size);
    console.log(stats);
});