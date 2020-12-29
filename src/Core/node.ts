
export class Node
{
  public parent: Node;
  public children: Node[];

  /**
   * Removes child from previous parent Node and sets as a child to another Node
   * @param child 
   */
  public appendChild(child: Node)
  {
    child.parent.children.splice(child.parent.children.indexOf(child), 1);
    child.parent = this;
    this.children.push(child);
  }

  public removeChildByIndex(index: number)
  {
    return this.parent.children.splice(index, 1);
  }

  public removeChild(child: Node)
  {
    return this.removeChildByIndex(this.children.indexOf(child));
  }
}