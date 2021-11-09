// async try catch - promise
// ref: demo21

//
// method 1
//
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      console.log("will do something that might have exception");
      throw new Error("HAHA, someone did not follow the rule");
      resolve(50);
    } catch (e) {
      reject(e);
    }
  }, 2000);
});

console.log("do something async");
p1.then((result) => console.log("finished, result=" + result)).catch((error) =>
  console.log("found exception=" + error)
);
console.log("main program finished");

//
// method 2
//
const myFunction = function () {
  throw new Error("oops");
  //console.log("finish something")
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//then and catch in Promise
delay(2000)
  .then(myFunction)
  .catch((error) => console.log("error=" + error));
delay(3000)
  .then(myFunction)
  .catch((error) => console.log("error=" + error));
delay(4000)
  .then(myFunction)
  .catch((error) => console.log("error=" + error));
delay(5000)
  .then(myFunction)
  .catch((error) => console.log("error=" + error));
console.log("do something else");
