// level-order-traversal.ts

class TreeNode {
  constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function levelOrderTraversal(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) {
    return result;
  }

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const level: number[] = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift() as TreeNode;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Construct a sample binary tree:
//        3
//       / \
//      9  20
//         / \
//        15  7
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

const levelOrder = levelOrderTraversal(root);
console.log(levelOrder); // [[3], [9, 20], [15, 7]]
