// async
// await

// part 1
// setTimeout(() => {
//   console.log("do something after 2 seconds");
// }, 2000);
// console.log("program terminated");

// part 2
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// part 3
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("**", i);
  }, 1000);
}

// arrow function
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log("!!!", i);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log("****", i);
  }, 1000);
}

console.log("program terminated");
