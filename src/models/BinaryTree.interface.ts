export default interface BinaryTreeInterface {
  id: number;
  counter?: number;
  parent: BinaryTreeInterface | null;
  value: number | string | null;
  _convert(item: any, i: number): number;
  _handleEqual(item: any, itemValue: number, thisValue: number): void;
  _compareValues(item: number, itemValue: number, thisValue: number): void;
  addLeftChild(item: number): void;
  addRightChild(item: number): void;
  insert(item: number): void;
  toGraph(isRoot: boolean): Graph;
}
interface Graph {
  nodes: {
    id: number;
    label: number | string;
    shape: any;
  }[];
  edges: {
    from: number;
    to: number;
  }[];
}
