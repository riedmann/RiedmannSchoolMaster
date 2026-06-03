interface Vehicle {
    drive(): void;
}

class Car implements Vehicle {
    drive(): void {
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
    drive(): void {
        console.log("SC is driving!");
    }
}

