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

  visit(node) {
    console.log('visit');
    console.log(node.value);
  }

  preorder(node) {
    console.log('preorder');
    if (node === null) return;
    this.visit(node); //Pre Visit
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node) {
    console.log('inorder');
    if (node === null) return;
    this.inorder(node.left);
    this.visit(node); //In Order Visit
    this.inorder(node.right);
  }

  postorder(node) {
    console.log('postorder');
    if (node === null) return;
    this.postorder(node.left);
    this.postorder(node.right);
    this.visit(node); //Post Visit
  }
}

const bst = new BinarySearchTree();
const sample = [1, 2, 5, 3, 6, 4];
sample.forEach((el) => bst.insert(el));
bst.inorder(bst.root);
