const fs = require("fs");
const events = require("events");

const eventNameSuccess = "readFileSuccess";
const eventEmitter = new events.EventEmitter();

const readFileError = () => {

    const log = "log.txt";
    const content = fs.readFileSync(log);
    const newContent = content.toString() + " | Read file error (" + new Date() +")";
    fs.writeFileSync("log.txt", newContent);
    console.log("Error !!!");
}

const readFileSuccess = (data) => {

    const content = JSON.parse(data);
    console.log(content);
}

eventEmitter.on("readFileError", readFileError);
eventEmitter.once("readFileSuccess", readFileSuccess);

const file = "message.txt";
fs.readFile(file, (error, data) => {

    if (error) {

        eventEmitter.emit("readFileError");
        return ;
    }

    const emitData = JSON.stringify({
        contentFile: data.toString(),
        date: new Date(),
        file: file
    });
    eventEmitter.emit(eventNameSuccess, emitData);
});
