import { INode } from "../Interfaces/inode";
import { Level } from "./level";

export class Scene
{
  public hierarchy: INode[] = [];
  public active_level: Level;

  constructor(level: Level = null)
  {
    if (level)
    {
      this.active_level = level;
    } else {
      this.active_level = new Level();
    }
    
  }
  
}