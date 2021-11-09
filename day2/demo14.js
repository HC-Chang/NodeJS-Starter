// var can "not" be deleted

var x1 = 100
x2 = 200
console.log(x1,x2)
delete global.x2
//console.log(x2) // x2 can be deleted
delete x1
delete global.x1
console.log(x1)

function bar(){
    var v1 = 300
    v2 = 400
    console.log(v1, v2)
    delete this.v2
    //console.log(v2)
    delete v1
    delete this.v1
    delete global.v1
    console.log(v1)
}
bar();