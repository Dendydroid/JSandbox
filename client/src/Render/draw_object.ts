import Konva from "konva";
import { Debug } from "../Core/debug";
import { Texture } from "./Texture";

export class DrawObject
{
  public texture: Texture;

  public sprite: any;

  constructor(src: string)
  {
    var animations = {
      standing: [0, 0, 80, 94],
      walking: [0, 94, 80, 94,
               80, 94, 80, 94,
               160, 94,  80, 94,
               240, 94, 80, 94,
               320, 94, 80, 94,
               400, 94, 80, 94],
      jumping: [0, 282, 80, 94,
               80, 282, 80, 94,
               160, 282, 80, 94]
    };
    
    this.texture = new Texture(src);

    this.sprite = new Konva.Sprite({
      x: 50,
      y: 50,
      image: this.texture.base_image,
      animation: 'standing',
      animations: animations,
      frameRate: 6,
      frameIndex: 0
    });
  
    this.sprite.start();
  }
}