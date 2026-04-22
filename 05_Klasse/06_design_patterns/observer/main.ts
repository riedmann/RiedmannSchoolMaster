import { Star } from "./Star.js";
import { Moon } from "./Moon.js";
import { Car } from "./Car.js";

const star1 = new Star("Sirius");
const star2 = new Star("Polaris");
const moon1 = new Moon("Luna");

const car = new Car("bmw");

car.addObserver(star2);
car.addObserver(moon1);
car.drive();
