
export class Texture {

  public base_src: string;
  public base_image: any;
  public width: number;
  public height: number;

  constructor(base_src: string, width: number = 256, height: number = 256)
  {
    this.width = width;
    this.height = width;
    this.base_src = base_src;
    this.base_image = new Image(this.width, this.height);
    this.base_image.src = this.base_src;
  }
}