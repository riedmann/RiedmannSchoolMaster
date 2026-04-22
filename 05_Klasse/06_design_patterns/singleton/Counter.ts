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
