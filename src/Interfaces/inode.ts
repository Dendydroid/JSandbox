
export interface INode
{
  appendChild(child: Node);

  removeChildByIndex(index: number);

  removeChild(child: Node);
}