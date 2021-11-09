// typeof

var x1 = 10
var x2 = "hello"
var x3 = {}
var x4 = [3, 4, 5]
function x5() { }
var x6 = 3.14
var x7 = 'c'
var x8 = 'cheer'
var x9 = true
var x10 = false
var x11 = null
var x12 = undefined

console.log("var x1 = 10: ", typeof x1)
console.log("var x2 = \"hello\": ", typeof x2)
console.log("var x3 = {}: ", typeof x3, Array.isArray(x3))
console.log("var x4 = [3, 4, 5]: ", typeof x4, Array.isArray(x4))
console.log("function x5() { }: ", typeof x5)
console.log("var x6 = 3.14: ", typeof x6)
console.log("var x7 = 'c': ", typeof x7)
console.log("var x8 = 'cheer': ", typeof x8)
console.log("var x9 = true: ", typeof x9)
console.log("var x10 = false: ", typeof x10)
console.log("var x11 = null: ", typeof x11)
console.log("var x12 = undefined: ", typeof x12)