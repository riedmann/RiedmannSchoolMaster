"use strict";
class Car {
    drive() {
        console.log("Car is driving");
    }
    sayHello() {
        console.log("Hello");
    }
}
class SuperCar extends Car {
    fly() {
        console.log("Superflyer");
    }
    drive() {
        console.log("SC is driving!");
    }
}
