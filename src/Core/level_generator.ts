import { MapTile } from "../Standart/map_tile";
import { Tile } from "../Entities/tile";
import { GLOBAL } from "../global";
import { Helpers } from "./helpers";

export class LevelGenerator
{
  private map: any;

  constructor(map: any = null)
  {
    if (map)
    {
      this.load(map);
    }
  }

  public load(map: any)
  {
    //@TODO ...
  }

  public static isTileVerticy(x:number, z: number, tile_size: number): boolean
  {
    return (x === 0 || x % tile_size === 0 && x !== 1) && (z === 0 || z % tile_size === 0 && z !== 1);
  }

  /**
   * Generating noise map, and providing a callback for handling each tile
   * @param max 
   * @param tile_size 
   * @param handle_tile 
   */
  public static generate(max: { x: number, y: number, z: number }, tile_size: number, handle_tile: CallableFunction)
  {
    let tile_map:any[] = [];
    let noiseData = 0;
    let scale = .1;
    let scale2 = Math.random();
    let tile = null;
    for (let z = 0; z < max.z; z++)
    {
      for (let x = 0; x < max.x; x++)
      {
        if (!tile_map[z])
        {
          tile_map[z] = [];
        }
        if (LevelGenerator.isTileVerticy(x,z,tile_size))
        {
          // EACH LEVEL TILE
          tile = new MapTile();
          tile_map[z].push(tile);
          tile.position.start.x = x; // A
          tile.position.start.z = z; // B
          tile.position.end.x = x + tile_size;
          tile.position.end.z = z + tile_size;
          noiseData = Helpers.perlinNoise(z * scale, x * scale, scale2);
          handle_tile(tile, noiseData);
        }
      }
    }
    return tile_map.filter(el => el.length);
  }
}