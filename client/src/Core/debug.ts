
export class Debug
{
  static throwException(message: string, data: any)
  {
    console.error({ message, data });
  }

  static log(message: string, data: any)
  {
    console.log({ message, data });
  }
}