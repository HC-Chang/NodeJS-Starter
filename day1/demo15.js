// foreach / for / 型別比較 - 1

var elements = [0, "", NaN, null, undefined];

elements.forEach((v, i, a) => {
  if (v) {
    console.log(v, "evaluate as true");
  } else {
    console.log(v, "evaluate as false");
  }
});

elements.forEach(evaluateFunction);
function evaluateFunction(value, index, array) {
  if (value) {
    console.log(value, "positive");
  } else {
    console.log(value, "negative");
  }
}

for (const e of elements) {
  console.log(e);
  if (e) {
    console.log(e, "positive!");
  } else {
    console.log(e, "negative!");
  }
}
