// object and arrow function

const Car = {
  speed: 50,
  getSpeed: function () {
    console.log("speed is", this.speed);
  },
  // this will release after 2 second
  getSpeed2: function () {
    setTimeout(function () {
      console.log("[1]after 2 seconds, speed is:", this.speed);
    }, 2000);
  },
  getSpeed3: function () {
    setTimeout(() => {
      console.log("[2]after 2 seconds, speed is:", this.speed);
    }, 2000);
  },
  getSpeed4: function () {
    const catchThis = this;
    setTimeout(() => {
      console.log("[3]after 2 seconds, speed is:", catchThis.speed);
    }, 2000);
  },
};
console.log(typeof Car);

Car.getSpeed();
Car.getSpeed2();
Car.getSpeed3();
Car.getSpeed4();
