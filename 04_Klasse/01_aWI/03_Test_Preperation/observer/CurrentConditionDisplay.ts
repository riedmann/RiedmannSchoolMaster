import { Observer } from "./Observer";

export class CurrentConditionDisplay implements Observer {
    private temperature: number = 0;
    private humidity: number = 0;

    inform(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
    }
}