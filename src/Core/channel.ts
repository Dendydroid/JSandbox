
import { IChannel } from "../Interfaces/ichannel";
const EventEmitter = require('events');

export class Channel extends EventEmitter implements IChannel {

  onEvent(name: string, handler: CallableFunction, args: any = null)
  {
    this.on(name, handler(args));
  }

  broadcast(name: string, args: any)
  {
    this.emit(name, args);
  }
}