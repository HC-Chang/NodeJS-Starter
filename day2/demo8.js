// Class

function Car() {
  this.speed = 0;
  this.number = "";
  this.fuel = 0;
  this.setSpeed = function (speed) {
    this.speed = speed;
  };
  this.isOverSpeed = function (speedLimit) {
    return this.speed > speedLimit;
  };
}

var myCar = new Car();
console.log(typeof Car, typeof myCar);
myCar.setSpeed(80);
console.log(myCar.speed);
console.log(myCar.isOverSpeed(100), myCar.isOverSpeed(50));

console.log(myCar);
