class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) this.head = newNode
    else this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    if (this.length === 1) {
      const node = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return node.val
    }
    let node = this.head
    while (node.next && node.next.next) {
      node = node.next
    }
    const oldTail = node.next
    this.tail = node
    this.tail.next = null
    this.length--
    return oldTail.val
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) this.tail = null
    return oldHead.val
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) this.tail = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let node = this.head
    while (counter < index) {
      counter++
      node = node.next
    }
    return node
  }

  set(index, value) {
    const node = this.get(index)
    if (!node) return false
    node.val = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    const pre = this.get(index - 1)
    const newNode = new Node(value)
    newNode.next = pre.next
    pre.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    const pre = this.get(index - 1)
    const removing = pre.next
    pre.next = removing.next
    this.length--
    return removing.val
  }

  reverse() {
    if (this.length <= 1) return
    let left = this.head
    this.tail = this.head
    let right = left.next
    let rightOfRight = right.next
    right.next = left
    while (rightOfRight) {
      left = right
      right = rightOfRight
      rightOfRight = rightOfRight.next
      right.next = left
    }
    this.head = right
    this.tail.next = null
  }
}

module.exports = SinglyLinkedList
