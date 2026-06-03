interface HeatingStrategy {
    regulateTemperature(currentTemperature: number): void;
}

class Eco implements HeatingStrategy {
    regulateTemperature(currentTemperature: number): void {
        console.log(`Eco mode: Regulating temperature to save energy. Current temperature: ${currentTemperature}°C`);
    }
}

class Comfort implements HeatingStrategy {
    regulateTemperature(currentTemperature: number): void {
        console.log(`Comfort mode: Regulating temperature for maximum comfort. Current temperature: ${currentTemperature}°C`);
    }
}

class Nedjo implements HeatingStrategy {
    regulateTemperature(currentTemperature: number): void {
        console.log("I am nedjo");

    }
}

class SmartHomeSystem {
    private strategy: HeatingStrategy;

    constructor(strategy: HeatingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: HeatingStrategy): void {
        this.strategy = strategy;
    }

    controlHeating(currentTemperature: number): void {
        this.strategy.regulateTemperature(currentTemperature);
    }
}

const s1: HeatingStrategy = new Eco();
const s2: HeatingStrategy = new Comfort();
const smartHome = new SmartHomeSystem(s1);
smartHome.controlHeating(18); // Eco mode: Regulating temperature to save energy. Current temperature: 18°C
smartHome.setStrategy(new Nedjo());
smartHome.controlHeating(40);