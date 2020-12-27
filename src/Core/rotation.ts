
export class Rotation {
  constructor(public rotation: number = 0){}

  public rotate(degrees: number)
  {
    this.rotation += degrees;
  }
}