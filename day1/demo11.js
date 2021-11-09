// 型別轉換

var x1 = 5 / 0
var x2 = -5 / 0
console.log(x1, x2)
console.log(x1 == Infinity, x1 == -Infinity, x2 == Infinity, x2 == -Infinity)
var x3 = parseInt("5")
var x4 = parseFloat("5")
console.log(typeof x3, x3, x3 + x3)
console.log(typeof x4, x4, x4 + x4)
var x5 = parseInt("3.14")
var x6 = parseFloat("3.14")
console.log(typeof x5, x5, x5+x5)
console.log(typeof x6, x6, x6+x6)
var x6 = parseInt("伍")
console.log(typeof x6, x6)
console.log(isNaN(x6))
console.log(isFinite(x1), isFinite(x2), isFinite(x3), isFinite(x5))