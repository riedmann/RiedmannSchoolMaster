
## 4. Vertiefung: Das Singleton Pattern in JavaScript / React

### 4.1 Das theoretische Konzept (Klassische OOP)
Das Singleton gehört zu den Erzeugungsmustern (Creational Patterns). Es stellt sicher, dass eine Klasse nur **eine einzige Instanz** besitzt und bietet einen globalen Zugriffspunkt auf diese Instanz. In klassischen Sprachen (wie Java oder C#) wird dies über einen privaten Konstruktor und eine statische Methode (z. B. `getInstance()`) gelöst.



#### Erkläre jede Zeile des folgenden Codes 
```typescript 
export class Counter {
  private static standings: number = 0;
  private static instance: Counter | null = null;

  private constructor() {}

  public static getInstance(): Counter {
    if (Counter.instance === null) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  increment(): void {
    Counter.standings++;
  }

  getStandings(): number {
    return Counter.standings;
  }
}
```

