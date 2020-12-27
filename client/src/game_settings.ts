import { EventEmitter } from "events";
import { DrawObject } from "./Render/draw_object";
import { Scene } from "./Render/scene";

export class GameSettings
{
  public mainScene: Scene;
  public emitter: any;

  constructor()
  {
    this.mainScene = new Scene();
    this.emitter = window;
  }

  draw(object: DrawObject)
  {
    this.mainScene.addObject(object);
    this.mainScene.draw();
  }
}