

export class Scale {
  constructor(
    public width: number,public height: number
  ) {
  }

  public resize(scale: Scale)
  {
    this.width = scale.width;
    this.height = scale.height;
  }

}