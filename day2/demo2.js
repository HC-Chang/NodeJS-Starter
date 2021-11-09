// forEach - 1

var x1 = "ABCDEFG1234567"
var a1 = Array.from(x1)
console.log(a1)
var x2 = "QWERTYIOPASDFGHJKLZXCVBNM"
var a2 = Array.from(x2)
console.log(a2.sort())
a2.forEach(function (e) {
    console.log("get an element:", e)
})
var a3 = [200, 150, 300, 400, 700]
sum = 0
a3.forEach(function (e) {
    sum += e
})
console.log("total value=", sum)
sum2 = 0
a3.forEach((e) => {
    sum2 += e
})
console.log("total value2=", sum2)