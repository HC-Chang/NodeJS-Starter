// Class prototype / inherit

// ref: https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Inheritance

//
// prototype - father
//
function Car() {}
Car.prototype.speed = 0;
Car.prototype.number = "";
Car.prototype.fuel = 0;
Car.prototype.setSpeed = function (speed) {
  Car.prototype.speed = speed;
};
Car.prototype.isOverSpeed = function (speedLimit) {
  return Car.prototype.speed > speedLimit;
};

// var myCar = new Car();
// console.log(typeof Car, typeof myCar);
// myCar.setSpeed(80);
// console.log(myCar.speed);
// console.log(myCar.isOverSpeed(100), myCar.isOverSpeed(50));

// console.log(myCar);

//
// inherit - child
//
function HybridCar() {}
HybridCar.prototype = new Car(); // method 1
// HybridCar.prototype.__proto__ = Car.prototype; // method 2
HybridCar.prototype.constructor = HybridCar; // reflect correct  type

HybridCar.prototype.batteryLimit = 50000;
HybridCar.prototype.totalEnergy = function () {
  return this.fuel * 21 + this.batteryLimit / 500;
};

var myCar2 = new HybridCar();
console.log(typeof HybridCar, typeof myCar2);
myCar2.setSpeed(80);
console.log(myCar2);
console.log(myCar2.speed);
console.log(myCar2.isOverSpeed(100), myCar2.isOverSpeed(50));
myCar2.fuel = 40;
console.log("total energy=", myCar2.totalEnergy());
