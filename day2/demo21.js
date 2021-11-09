// async try catch
// ref: demo23

//
// case 1: can not catch err
// try {
//   setTimeout(() => {
//     throw new Error("HAHA");
//   }, 2000);
//   //throw new Error("HAHA")
// } catch (e) {
//   console.log("got an error" + e);
// }
// console.log("program can proceed");

//
// case 2: catch err in error thread
//
setTimeout(() => {
  try {
    throw new Error("HAHA");
  } catch (e) {
    console.log("got an error" + e);
  }
}, 2000);
console.log("program can proceed");
