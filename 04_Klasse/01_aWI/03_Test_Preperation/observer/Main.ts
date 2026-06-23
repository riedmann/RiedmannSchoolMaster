import { Station } from "./Station.ts";
import { Observer } from "./Observer";
import { CurrentConditionDisplay } from "./CurrentConditionDisplay.ts";

const station: Station = new Station();

const d1: Observer = new CurrentConditionDisplay();
const d2: Observer = new CurrentConditionDisplay();

station.addObserver(d1);
station.addObserver(d2);

station.notifyObservers(25, 65, 1013);