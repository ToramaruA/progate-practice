export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string,
): boolean => {
  for (const node of root.children) {
    if (!node.isDirectory && node.name === target) {
      return true;
    }
    if (node.isDirectory) {
      if (depthFirstSearch(node, target)) {
        return true;
      }
    }
  }
  return false;
};

//＜オプション＞見つけたファイルのpathも表示できるようにする
