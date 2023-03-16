const mitt = require("mitt");

const emitter = mitt();

emitter.on("foo", (e) => console.log("foo", e));

// emitter.on("*", (type, e) => console.log(type, e));

emitter.emit("foo", {a: "b"});
