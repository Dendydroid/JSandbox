import { LevelGenerator } from "../Core/level_generator";
import { GLOBAL } from "../global";
import { MapTile } from "../Standart/map_tile";


export class Level {
  public id: string;

  private max: { x: number, y: number, z: number } = { x: 0, y: 0, z: 0 };
  private noise: any = [];
  private tile_size: number;


  constructor() {
    this.tile_size = GLOBAL.config.defaults.level.tile_size;
    this.max = GLOBAL.config.defaults.level.max;

    this.noise = LevelGenerator.generate(this.max, this.tile_size, (tile: MapTile, noiseData: number) => {
      tile.noise_value = noiseData;
      let n = (noiseData * 255).toFixed(0);
      if (noiseData > .5)
      {
        tile.color = `rgb(0,${n},0)`;
      } else {
        tile.color = `rgb(0,0,${n})`;
      }
      
    });
  }
}