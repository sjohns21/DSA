class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }
    let node = this.root
    while (node) {
      if (node.value < value) {
        if (node.right) node = node.right
        else {
          node.right = newNode
          return this
        }
      } else if (node.value > value) {
        if (node.left) node = node.left
        else {
          node.left = newNode
          return this
        }
      } else {
        break
      }
    }
  }

  find(value) {
    let node = this.root
    while (node) {
      if (node.value < value) {
        if (node.right) node = node.right
        else return false
      } else if (node.value > value) {
        if (node.left) node = node.left
        else return false
      } else if (node.value === value) {
        return true
      }
    }
    return false
  }
}

module
  .exports = {BinarySearchTree, Node}
