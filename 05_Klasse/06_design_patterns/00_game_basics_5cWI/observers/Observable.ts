import { Observer } from "./Observer";

export interface Observable {
  addInterested(observer: Observer): void;
  notifyObservers(): void;
}
