// boolean

var x1 = Boolean("true")
var x2 = Boolean("false")
var x3 = Boolean("")

var x4 = Boolean(1)
var x5= Boolean(0)
var x6 = Boolean(-1)

var x7 = Boolean(NaN)
var x8 = Boolean(null)
var x9 = Boolean(undefined)

var x10 = Boolean(Infinity)
var x11 = Boolean(-Infinity)

// true true false
console.log(x1, x2, x3)
// true false true
console.log(x4, x5, x6)
// false false false 
console.log(x7,x8, x9)
// true true
console.log(x10, x11)