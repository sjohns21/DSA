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

  BFS(){
    const visited = []
    const q = [this.root]
    while(q.length){
      const node = q.shift()
      visited.push(node.value)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    return visited
  }

  DFSPreOrder(){
    const visited = []
    function dig(node){
      visited.push(node.value)
      if(node.left) dig(node.left)
      if(node.right) dig(node.right)
    }
    if(this.root) dig(this.root)
    return visited
  }
  DFSPostOrder(){
    const visited = []
    function dig(node){
      if(node.left) dig(node.left)
      if(node.right) dig(node.right)
      visited.push(node.value)
    }
    if(this.root) dig(this.root)
    return visited
  }
  DFSInOrder(){
    const visited = []
    function dig(node){
      if(node.left) dig(node.left)
      visited.push(node.value)
      if(node.right) dig(node.right)
    }
    if(this.root) dig(this.root)
    return visited
  }


}

module
  .exports = {BinarySearchTree, Node}
