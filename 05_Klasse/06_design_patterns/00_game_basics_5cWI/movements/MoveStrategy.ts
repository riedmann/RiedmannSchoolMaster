export interface MoveStrategy {
  move(): void;
  getX(): number;
  getY(): number;
}
