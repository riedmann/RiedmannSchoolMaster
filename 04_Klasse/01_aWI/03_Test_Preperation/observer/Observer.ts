export interface Observer {
    inform(temperature: number, humidity: number, pressure: number): void;
}