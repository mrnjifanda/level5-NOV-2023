const fs = require("fs");

// const data = fs.readFileSync("./message.txt");
// console.log(data.toString());

let response = '';
fs.readFile("./message.txt", function (error, data) {

    if (error) return console.error(error);
    response = data.toString();
});

console.log("1 End time out", response.toUpperCase());

setTimeout(() => {
    console.log("3 In time out", response.toUpperCase());
}, 5000);

console.log("2 END !!!");

