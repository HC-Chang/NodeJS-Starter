// const

const PROGRAM_TITLE = "hello";
//PROGRAM_TITLE += " world"
console.log(PROGRAM_TITLE);

const MAX1 = 1;
let i = 100;
const MAX2 = i + MAX1;

console.log(MAX2);
i += 100;
console.log(MAX2); // value keep the same
//MAX2 += 5
console.log(MAX2);

const a1 = [1, 2];
a1.push(3);
a1.push(4);
a1.push(5);
console.log(a1);

//a1 = [4,5,6]
let a2 = [1, 2];
a2 = [3, 4];
console.log(a2);

console.log(a1.pop());
console.log(a1.pop());
console.log(a1.pop());
console.log(a1.pop());
console.log(a1.pop());
console.log(a1.pop());
