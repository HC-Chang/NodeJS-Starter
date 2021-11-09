// regex

var string1 = "Foo, foo"
var string2 = "Foo, foo, Ffoo"

var p1 = string1.replace(/[Ff]/g,'q')
console.log(p1)

var p2 = string1.replace(/f/g, 'q')
console.log(p2)

var p3 = string1.replace(/f/ig, 'q')
console.log(p3)

var p4 = string2.replace(new RegExp("[Ff]","g"), 'q')
console.log(p4)