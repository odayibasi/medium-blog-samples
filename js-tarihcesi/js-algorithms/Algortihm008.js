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

  visit(node, mapOfTopNodes) {
    console.log('visit');
    console.log(
      'val:' + node.value + ' depth:' + node.depth + ' dist:' + node.dist
    );

    const topNode = mapOfTopNodes[node.dist];

    if (!topNode) {
      mapOfTopNodes[node.dist] = node;
    } else if (topNode && node.depth < topNode.depth) {
      mapOfTopNodes[node.dist] = node;
    }
  }

  //Depth:Y Axis
  //Dist: X Axis
  traverse(node, depth, dist, mapOfTopNodes) {
    if (node == null) return;
    node.depth = depth;
    node.dist = dist;
    this.visit(node, mapOfTopNodes); //Pre Visit
    if (node.left) this.traverse(node.left, depth + 1, dist - 1, mapOfTopNodes);
    if (node.right)
      this.traverse(node.right, depth + 1, dist + 1, mapOfTopNodes);
  }

  topView() {
    const mapOfTopNodes = {};
    this.traverse(this.root, 0, 0, mapOfTopNodes);
    const arrOfTopNodes = Object.values(mapOfTopNodes);
    console.log(
      arrOfTopNodes
        .sort((a, b) => {
          return a.dist - b.dist;
        })
        .map((el) => el.value)
    );
  }
}

const bst = new BinarySearchTree();
const sample = [1, 2, 5, 3, 6, 4];
sample.forEach((el) => bst.insert(el));
bst.topView();
