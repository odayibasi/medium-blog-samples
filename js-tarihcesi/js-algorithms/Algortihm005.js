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
}

const bst = new BinarySearchTree();
const sample = [1, 2, 5, 3, 6, 4];
sample.forEach((el) => bst.insert(el));
console.log(bst);