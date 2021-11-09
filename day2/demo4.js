// 型別比較 - 2
// compare with day1 demo15

const trouble = [0, "", NaN, null, undefined, false];

for (let i = 0; i < trouble.length; i++) {
  for (let j = i + 1; j < trouble.length; j++) {
    result = trouble[i] == trouble[j];
    result2 = trouble[i] === trouble[j];
    console.log(
      `compare [${trouble[i]}] with [${trouble[j]}] result=${result}, result using === ==>${result2}`
    );
  }
}
console.log("345" == 345, "345" === 345);
