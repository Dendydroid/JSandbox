import { IChannel } from "../Interfaces/ichannel";
import { DrawableMessage } from "../Core/drawable";
import { ERROR_MESSAGES } from "../Core/error_messages";

export class Subscriber
{
  constructor(private id: string)
  {}

  private channels: [{id: string, channel: IChannel}];

  public subscribe(channel: IChannel): string
  {
    let uuid = `channel_${(Math.random() % 100 * 100 + new Date().getTime()).toString()}`;
    
    this.channels.push({
      id: uuid,
      channel: channel,
    });

    return uuid;
  }

  public emit(id: string, name: string, data: any)
  {
    let channelArray = this.channels.filter(channel => channel.id === id);

    if (channelArray.length)
    {
      channelArray[0].channel.broadcast(name, data);
    }

    if (!channelArray.length && process.env.DEBUG_MODE)
    {
      DrawableMessage.throwException(`${ERROR_MESSAGES.EVENT_EMIT_FAIL} Subscriber ${this.id} is not subscribed to a channel ${id}`);
    }
  }
}