
export class Helpers
{
  static getUUID(): string
  {
    return (Math.random() % 100 * 100 + new Date().getTime()).toString();
  }
}