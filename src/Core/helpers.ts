import { PerlinNoise } from "./perlin_noise";

export class Helpers
{
  static isEqual(x: {}, y: {}): boolean {
    return JSON.stringify(x) === JSON.stringify(y);
  }

  static containsObject(arr: any[], object: {}): boolean
  {
    let contains = false;
    for (let i in arr)
    {
      contains = Helpers.isEqual(arr[i], object);

      if (contains)
      {
        return true;
      }
    }
    return false;
  }

  static perlinNoise(x:number, y:number, z:number)
  {
    let perlin = new PerlinNoise();
    return perlin.noise(x, y, z);
  }

  static getUUID(): string
  {
    return (Math.random() % 100 * 100 + new Date().getTime()).toString();
  }
}
  