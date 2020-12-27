import Konva from "konva";
import { Helpers } from "../Core/helpers";

export class Layer
{
  public layer: Konva.Layer;
  public id: string;

  constructor(id: string = "")
  {
    if (!id)
    {
      this.id = Helpers.getUUID();
    } else {
      this.id = id;
    }

    this.layer = new Konva.Layer();
  }

  public add(figure: any)
  {
    this.layer.add(figure);
  }

  public update()
  {
    this.layer.draw();
  }
}