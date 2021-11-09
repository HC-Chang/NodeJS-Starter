// var / let - feature - 2

function bar1() {
  let j = 0;
  for (var i = j; i < 10; i++) {
    console.log("i=", i);
  }
  console.log("i=", i, "j=", j);
}
bar1();

function bar2() {
  let j = 0;
  for (let i = j; i < 10; i++) {
    console.log("i=", i);
  }
  //console.log("i=",i)
  console.log("j=", j);
}
bar2();
