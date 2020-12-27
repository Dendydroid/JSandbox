import { Position } from "./position";
import { Rotation } from "./rotation";
import { Scale } from "./scale";
import { GLOBAL } from "../global";


export class Transform {
  public pos: Position;
  public rot: Rotation;
  public scl: Scale;

  constructor()
  {
    this.pos = new Position(GLOBAL.config.defaults.transform.position.x, GLOBAL.config.defaults.transform.position.y);
    this.rot = new Rotation(GLOBAL.config.defaults.transform.rotation);
    this.scl = new Scale(GLOBAL.config.defaults.transform.scale.width, GLOBAL.config.defaults.transform.scale.height);
  }

  public toString(): string
  {
    return `Transform( pos: {x:${this.pos.x}, y:${this.pos.y}}, rot: {rotation:${this.rot.rotation}°}, scl: {width:${this.scl.width}, height:${this.scl.height}} )`;
  }

  public setRandomPosition(maxX: number, maxY: number)
  {
    this.pos.x = parseInt((Math.random() * maxX).toFixed(0));
    this.pos.y = parseInt((Math.random() * maxY).toFixed(0));
  }

  public setRandomScale(maxWidth: number, maxHeight: number)
  {
    this.scl.width = parseInt((Math.random() * maxWidth).toFixed(0));
    this.scl.height = parseInt((Math.random() * maxHeight).toFixed(0));
  }
}