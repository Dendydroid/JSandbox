import { GLOBAL } from "../global";
import { Helpers } from "./helpers";
import { LevelMap } from "./level_map";

export class Level
{
  private noise: any = [];
  private tile_size: number;
  private max: { height: number, width: number } = {height: 0, width: 0};

  constructor(map: LevelMap = null)
  {
    this.tile_size = GLOBAL.config.defaults.level.tile_size;
    this.max.width = GLOBAL.config.defaults.level.maxWidth;
    this.max.height = GLOBAL.config.defaults.level.maxHeight;
    if (map)
    {
      this.load(map);
    } else {
      this.generate(this.max.width, this.max.height);
    }
  }

  public load(map: LevelMap)
  {
    //@TODO ...
  }

  public generate(maxWidth: number, maxHeight: number)
  {
    let data = 0;
    let scale = .1;
    let scale2 = Math.random();
    for (let y = 0; y < maxHeight/this.tile_size; y++)
    {
      this.noise[y] = [];
      for (let x = 0; x < maxWidth/this.tile_size; x++)
      {
        data = Helpers.perlinNoise(y * scale, x * scale, scale2);
        this.noise[y][x] = (data * 255).toFixed(0);
      }  
    }
  }

  public getNoise()
  {
    return this.noise;
  }
}