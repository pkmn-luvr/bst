/**
 * 
 * BINARY SEARCH TREES (BST)
 * 
 * BST are data structures that organize data in a hierarchial manner
 * 
 * Each node is a value and two children: LEFT & RIGHT
 * 
 * LEFT val is always < Parent val; RIGHT val is always > Parent val
 * 
 * BST provides efficiently searching, inserting, and deleting operations 
 * 
 * Operations: 
 *  - insert (iterative & recursive) - adds new node w/ spec. val to BST; avg O(log n), worst case O(n)
 *  
 * - search (iterative & recursive) - searches for node w/ spec. val in BST; avg case O(log n), worst case O(n)
 *  
 * - depth-first traversals (pre-order, in-order, post-order)...time complexity O(n)
 *    pre-order - visits current node before child nodes; useful for creating copy of tree
 *    in-order - visits LEFT child, then current node, then RIGHT child; retrieves elements in sorted order
 *    post-order - visits child nodes before current node, useful for deleting/freeing nodes of the tree
 * 
 *  - breadth-first traversal - visits nodes level by level from root to deepest; O(n) for visiting all nodes;
 *    useful for finding shortest path from root to particular node 
 * 
 * 
 */


class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!node) {
      this.root = new Node(val);
      return this;
    }

    if (val < node.val) {
      if (node.left === null) {
        node.left = new Node(val);
      } else {
        this.insertRecursively(val, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(val);
      } else {
        this.insertRecursively(val, node.right);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current !== null) {
      if (val === current.val) return current;
      current = val < current.val ? current.left : current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val === node.val) return node;
    return this.findRecursively(val, val < node.val ? node.left : node.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        values.push(node.val);
      }
    };
    traverse(this.root);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const values = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        values.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return values;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
