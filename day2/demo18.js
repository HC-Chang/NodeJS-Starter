// sync

const fs = require("fs");
const FILENAME = "./demo1.js";
console.log("program start\n-----\n");
const data = fs.readFileSync(FILENAME);
console.log(data.toString());
console.log("\n-----\n----Program Terminated---");
