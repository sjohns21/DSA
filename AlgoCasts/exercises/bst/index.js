// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create and insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    const newNode = new Node(data)
    let current = this
    recurse(current, newNode)
    function recurse(node, inserting) {
      if (inserting.data < node.data) { //left
        if (!node.left) {
          node.left = inserting
        } else {
          recurse(node.left, inserting)
        }
      } else if (inserting.data > node.data) { //right
        if (!node.right) {
          node.right = inserting
        } else {
          recurse(node.right, inserting)
        }
      }
    }
  }

  contains(searchingFor) {
    if (searchingFor < this.data) { //left
      if (!this.left) {
        return null
      } else {
        return this.left.contains(searchingFor)
      }
    } else if (searchingFor > this.data) { //right
      if (!this.right) {
        return null
      } else {
        return this.right.contains(searchingFor)
      }
    } else if (searchingFor === this.data) {
      return this
    }

  }
}

module.exports = Node
