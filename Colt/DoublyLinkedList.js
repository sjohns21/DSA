class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
    this.length++
    return this
  }

  pop() {
    if (!this.tail) return undefined
    const oldTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      oldTail.prev = null
    }
    this.length--
    return oldTail
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift(val){
    const newNode = new Node(val)
    if(!this.head){
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
    }
    this.head = newNode
    this.length++
    return this
  }

  get(index){
    if(index < 0 || index >= this.length) return null
    const midpoint = this.length / 2
    let node
    if(index < midpoint) {
      node = this.head
      let counter = 0
      while(counter < index){
        node = node.next
        counter++
      }
    } else {
      node = this.tail
      let counter = this.length - 1
      while(counter > index){
        node = node.prev
        counter--
      }
    }
    return node
  }

  set(index, val){
    const node = this.get(index)
    if(!node) return false
    node.val = val
    return true
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.unshift(val)
    if(index === this.length) return !!this.push(val)
    const before = this.get(index - 1)
    const newNode = new Node(val)
    newNode.next = before.next
    newNode.next.prev = newNode
    before.next = newNode
    newNode.prev = before
    this.length++
    return true
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
    const pre = this.get(index - 1)
    const removing = pre.next
    const post = removing.next
    pre.next = post
    post.prev = pre
    removing.prev = null
    removing.next = null
    this.length--
    return removing
  }

  reverse(){
    if(!this.head) return

    let a = this.head
    this.tail = this.head
    let b = a.next

    let temp = a.next
    a.next = a.prev
    a.prev = temp

    while(b){
      a = b
      b = b.next

      temp = a.next
      a.next = a.prev
      a.prev = temp
    }
    this.head = a
  }
}

module.exports = DoublyLinkedList
