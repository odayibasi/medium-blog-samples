class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      //Lesser  => Left Side
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      //Greater => Right Side
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  calcMaxDepth(node, depthCounter) {
    console.log(
      'maxDepth:' +
        (depthCounter + 1) +
        ' nodeValue:' +
        (node ? node.value : null)
    );
    if (node === null) return depthCounter;
    if (node.left === null && node.right === null) return depthCounter + 1;
    const lDefth = this.calcMaxDepth(node.left, depthCounter + 1);
    const rDepth = this.calcMaxDepth(node.right, depthCounter + 1);
    return Math.max(lDefth, rDepth);
  }
}
const bst = new BinarySearchTree();
const sample = [1, 2, 5, 3, 6, 4];
sample.forEach((el) => bst.insert(el));
console.log(bst.calcMaxDepth(bst.root, 0));
