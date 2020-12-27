import { Transform } from "./transform";

export class GameObject
{
  public transform: Transform;

  constructor()
  {
    this.transform = new Transform();
  }
}