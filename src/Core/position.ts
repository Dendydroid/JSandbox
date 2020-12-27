
export class Position {
  constructor(
    public x: number,public y: number
  ) {
  }

  public teleport(pos: Position)
  {
    this.x = pos.x;
    this.y = pos.y;
  }

}