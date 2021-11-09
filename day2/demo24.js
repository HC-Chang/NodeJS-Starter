// event

// 需自行確認 event 是否執行完成

const events = require("events");
const eventEmitter = new events.EventEmitter();

const firstHander = function doFirst() {
  setTimeout(() => {
    console.log("do something for first event, read some data...");
    setTimeout(() => {
      eventEmitter.emit("second");
    }, 2000);
  }, 3000);
};

// bind event
eventEmitter.on("second", function () {
  console.log("data received successfully");
});

eventEmitter.on("first", firstHander);

// trigger event
eventEmitter.emit("first");
