// for in / for of

var chosen = [1, 3, 5, 7, 2, 4, 6];

for (index in chosen) {
  console.log("[in]value=", chosen[index]);
}

for (item of chosen) {
  console.log("[of]value=", item);
}

var dict1 = { name: "Mark", role: "FAE", age: 39, location: "Hsinchu" };
for (index in dict1) {
  console.log(index, dict1[index]);
}
