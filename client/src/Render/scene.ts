import Konva from "konva";
import { Threshold } from "konva/types/filters/Threshold";
import { Debug } from "../Core/debug";
import { ERROR_MESSAGES } from "../Core/error_messages";
import { DrawObject } from "./draw_object";
import { Layer } from "./layer";

export class Scene
{
  public stage: Konva.Stage;
  public layers: Layer[] = [];
  public main_layer: Layer;

  constructor(options: any = {
    container: 'world',
    width: 1920,
    height: 1080
  })
  {
    this.stage = new Konva.Stage(options);
    this.main_layer = new Layer();
    this.add(this.main_layer);
  }

  public add(layer: Layer)
  {
    this.stage.add(layer.layer);
    this.layers.push(layer);
  }

  public width()
  {
    return this.stage.width;
  }

  public height()
  {
    return this.stage.height;
  }

  public draw()
  {
    this.stage.draw();
  }

  public addObject(draw_object: DrawObject, layer_id: string = "")
  {
    if (!layer_id)
    {
      this.main_layer.add(draw_object.sprite);
      this.main_layer.update();
      return;
    }

    let found = this.layers.filter(layer => layer.id === layer_id);

    if (!found.length)
    {
      Debug.throwException(ERROR_MESSAGES.LAYER_NOT_FOUND, { layer_id, found });
      return;
    }

    found[0].add(draw_object);
    found[0].update();
  }

}