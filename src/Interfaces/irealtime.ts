import { Subscriber } from "src/Core/subscriber";
import { IChannel } from "./ichannel";

export interface IRealtime
{
  channels: IChannel[];
  subscriber: Subscriber;

  start();
  update();
}