// Reference Type by Inherit
// list [], dictionary {}

function A() {
  // individual variable
  //this.customers = ['a', 'b']
  //this.name=""
}

// static variable (all children share the variable)
// way2 not that nature
A.prototype.customers = ["a", "b"];
A.prototype.name = "";

function B() {}
B.prototype = new A()
B.prototype.__proto__ = A.prototype
B.prototype.constructor = B
let b1 = new B()
let b2 = new B()
b1.name='I am b1'
console.log("b1 customers=", b1.customers, b2.custoemrs, b1.name, b2.name)
b1.customers.push("c")
b2.name = "I am B2"
console.log("b1 customers=", b1.customers, b2.customers, b1.name, b2.name)
function C() {

}

C.prototype = new A()
C.prototype.__proto__ = A.prototype
C.prototype.constructor = C
let c1 = new C()
console.log("c1 customers=", c1.customers, c1.name)
c1.customers.push('d')
c1.name='I am C1@@@'
console.log("c1 customers=", c1.customers, c1.name)
