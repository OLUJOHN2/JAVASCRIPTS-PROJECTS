// NODE CLASS
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// TREE CLASS
class Tree {
  constructor(array) {
    const cleanArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(cleanArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }

  insert(value, node = this.root) {
    if (node === null) return new Node(value);

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }

      node.data = successor.data;
      node.right = this.deleteItem(successor.data, node.right);
    }

    return node;
  }

  find(value, node = this.root) {
    if (node === null) return null;
    if (node.data === value) return node;

    if (value < node.data) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      callback(current);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  inOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (node === null) return;

    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (node === null) return;

    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (node === null) return;

    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;

    const heightHelper = (current) => {
      if (current === null) return -1;
      return 1 + Math.max(
        heightHelper(current.left),
        heightHelper(current.right)
      );
    };

    return heightHelper(node);
  }

  depth(value, node = this.root, count = 0) {
    if (node === null) return null;
    if (node.data === value) return count;

    if (value < node.data) {
      return this.depth(value, node.left, count + 1);
    } else {
      return this.depth(value, node.right, count + 1);
    }
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const getHeight = (current) => {
      if (current === null) return -1;
      return 1 + Math.max(
        getHeight(current.left),
        getHeight(current.right)
      );
    };

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}

// PRETTY PRINT
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) return;

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }

  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// DRIVER SCRIPT
const randomArray = (size = 15) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100));

const tree = new Tree(randomArray());

console.log("Balanced:", tree.isBalanced());
prettyPrint(tree.root);

tree.insert(150);
tree.insert(200);
tree.insert(300);

console.log("Balanced after insertions:", tree.isBalanced());

tree.rebalance();

console.log("Balanced after rebalance:", tree.isBalanced());
prettyPrint(tree.root);
