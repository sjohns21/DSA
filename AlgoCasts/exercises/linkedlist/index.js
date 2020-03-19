// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const newHead = new Node(data, this.head)
    this.head = newHead
  }

  size() {
    let node = this.head
    let count = 0
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let a = this.head
    if (!a) return null
    while (a.next) {
      a = a.next
    }
    return a
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return null
    this.head = this.head.next
  }

  removeLast() {
    let a = this.head
    if (!a) return
    let b = a.next
    if (!b) {
      this.head = null
      return
    }
    while (b.next) {
      a = b
      b = b.next
    }
    a.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data)
    } else {
      // The chain is empty!
      this.head = new Node(data)
    }
  }

  getAt(targetIndex) {
    let currentNode = this.head
    let currentIndex = 0
    while ((currentIndex < targetIndex) && currentNode) {
      currentIndex++
      currentNode = currentNode.next
    }
    return currentNode
  }

  removeAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next
      return
    }
    const pre = this.getAt(index - 1)
    const post = this.getAt(index + 1)
    if (pre) pre.next = post
  }

  insertAt(data, index) {
    const newNode = new Node(data)

    if (index === 0) {
      const temp = this.head
      newNode.next = temp
      this.head = newNode
    } else {
      const pre = this.getAt(index - 1)
      if (!pre) {
        const last = this.getLast()
        last.next = newNode
      } else {
        const dis = this.getAt(index)
        pre.next = newNode
        newNode.next = dis
      }
    }
  }
  forEach(fn){
    let node = this.head
    while (node) {
      fn(node)
      node = node.next
    }
  }
  *[Symbol.iterator](){
    let node = this.head
    while(node){
      yield node
      node = node.next
    }
  }

}

module.exports = {Node, LinkedList}
