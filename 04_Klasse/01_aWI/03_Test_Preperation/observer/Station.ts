import { Observer } from "./Observer.ts";
export class Station {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(temperature: number, humidity: number, pressure: number): void {
        for (const observer of this.observers) {
            observer.inform(temperature, humidity, pressure);
        }
    }
}