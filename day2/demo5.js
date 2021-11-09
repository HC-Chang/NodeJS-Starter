// Function Argument / apply

var x1 = 123
var x2 = new Number(123)
console.log(typeof x1, typeof x2)
console.log(x1, x2, x1 == x2, x1 === x2)

function echoMe(name) {
    console.log("echo:", name)
}
echoMe()
echoMe("Mark")
echoMe("Mark", "Mary")
echoMe(["Mark", "Abby"])

function mySum() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(mySum())
console.log(mySum(10,20,30,40,50))

// error
console.log(mySum([10,20,30]))
// correct
// apply
console.log(mySum.apply(null, [10, 20, 30]));
console.log(mySum(...[10, 20, 30, 40, 50, 60]));

const user1 = { name: "Mark", age: 44 };
echoMe(user1);
function echoMe2(user) {
  console.log("echo:", user.name);
}
echoMe2(user1);