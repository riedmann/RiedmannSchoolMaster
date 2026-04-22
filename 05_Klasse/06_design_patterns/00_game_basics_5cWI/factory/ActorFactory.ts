import { Actor } from "../actors/Actor.js";
export interface ActorFactory {
  createActors(count: number): Actor[];
}
