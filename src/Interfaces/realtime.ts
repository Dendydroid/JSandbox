import { IChannel } from "./ichannel";
import { IRealtime } from "./irealtime";

export class Realtime implements IRealtime {
  channels: IChannel[];

  constructor() {
    if (channel) {
      this.channel = channel;
    }

    this.start();
  }

  public start() { }

  public update() {
    if (this.channel) {

    }
  }
}