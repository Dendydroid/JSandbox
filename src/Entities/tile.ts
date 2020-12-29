import { Point3 } from "../Core/point";
import { Square } from "../Core/square";
import { Line3 } from "../Core/vector";
import { ITile } from "src/Interfaces/itile";

export class Tile implements ITile
{
  public position: Line3 = new Line3();

  private visible: boolean = false;
  
  public noise_value: number = 0;

  public getPosition()
  {
    return this.position;
  }

  public getVerticies()
  {
    let square = new Square();

    square.verticies.top_left.x = this.position.start.x;
    square.verticies.top_left.z = this.position.start.z;

    square.verticies.top_right.x = this.position.end.x;
    square.verticies.top_right.z = this.position.start.z;

    square.verticies.bottom_left.x = this.position.start.x;
    square.verticies.bottom_left.z = this.position.end.z;

    square.verticies.bottom_right.x = this.position.end.x;
    square.verticies.bottom_right.z = this.position.end.z;

    return square;
  }

  public draw()
  {
    this.visible = true;
  }
}