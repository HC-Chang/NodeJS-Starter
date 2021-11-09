// forEach - 2

var a1 = [1, 2, 3, 4, 5]
a1.forEach(function (e) {
    console.log("element=", e)
})
a1.forEach(function (e) {
    e *= 2
})
console.log("[2]a1=", a1)
a1.forEach(function (value, index, array) {
    //console.log("value=", value, " ,index=", index, " array=", array)
    console.log(`value=${value}, index=${index}, array=${array}`)
})
a1.forEach(function (value, index, array) {
    array[index] *= 2;
})
console.log("[3]a1=", a1)
a1.forEach(function (value, index, _) {
    this[index] *= 2
}, a1)
console.log("[4]a1=", a1)