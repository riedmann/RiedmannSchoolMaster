import { Counter } from "./Counter.js";

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.getStandings());
console.log(counter2.getStandings());
