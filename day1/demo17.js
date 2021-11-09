// array, splice, pop, shift

var array1 = new Array()
array1.push('Apple')
array1.push('Banana')
array1[3]="Donut"
console.log(array1)

var array2 = []
array2.push('Apple')
array2.push('Banana')
array2[3]="Donut"
console.log(array2)

delete array1[1]
console.log(array1)

delete array1[1]
console.log(array1)

delete array1[3]
console.log(array1)

// splice, pop, shift
var array11 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var array12 = array11.splice(2, 2)
console.log("original array1:", array11)
console.log("new array2:", array12)
var array13 = ['e', 'f', 'g']
array13.push(100)
console.log(array13)
console.log(array13.pop(), array13)
console.log(array13.pop(), array13)
array13.unshift("Joker")
console.log(array13)
console.log(array13.shift(),array13)