// 字串處理

var x1 = 'abcde'
var x2 = '伍伍伍伍伍'
var x3 = null
console.log(x1.length)
console.log(x2.length)
//console.log(x3.length)

console.log("I have " + 1 + 2 + " computers")
console.log(1 + 2 + " computers")
console.log("I have " + (1 + 2) + " computers")
console.log("Sunday".indexOf("day"))
console.log("Sunday".substr(3, 3))
console.log("Sunday".slice(3, 6))

var x4 = "Sunday,Monday,Tuesday".split(',')
console.log(typeof x4, Array.isArray(x4), x4)

var x5 = "\t\n   \t  abc def\n\r\t\t".trim()
console.log(x5)
console.log('123')