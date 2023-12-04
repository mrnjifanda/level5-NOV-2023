const events = require("events");

let eventEmitter = new events.EventEmitter();

// eventEmitter.on("newListener", () => {

//     console.log("New listener Added !");
// });

// eventEmitter.addListener("newListener", () => {
//     console.log("Hello event");
// });

// eventEmitter.on("removeListener", () => {

//     console.log("Listener removed !!!");
// });

// eventEmitter.setMaxListeners(100);

eventEmitter.on("newListener", () => {

    console.log("Hello");
});

eventEmitter.addListener("newListener", () => {
    console.log("Hello event");
});


const listeners = eventEmitter.listeners();


listeners.forEach((listener, data, all) => {
    console.log(listener);
});