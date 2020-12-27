
export interface IChannel
{
  onEvent(name: string, handler: CallableFunction, args: any);
  broadcast(name: string, args: any);
}