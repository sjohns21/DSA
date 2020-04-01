class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }

}

class PriorityQueue {
  constructor() {
    this.arr = []
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.arr.push(newNode)
    let right = this.arr.length - 1
    let left = Math.floor((right - 1) / 2)
    while (this.arr[left] && this.arr[left].priority > this.arr[right].priority) {
      const temp = this.arr[left]
      this.arr[left] = this.arr[right]
      this.arr[right] = temp
      right = left
      left = Math.floor((right - 1) / 2)
    }
  }

  dequeue2() {
    if (this.arr.length <= 1) return this.arr.pop()

    const oldRoot = this.arr[0]
    this.arr[0] = this.arr.pop()

    let i = 0
    let leftI = i * 2 + 1
    let rightI = i * 2 + 2
    while ((this.arr[leftI] && this.arr[i].priority > this.arr[leftI].priority)
    || (this.arr[rightI] && this.arr[i].priority > this.arr[rightI].priority)) {
      if (!this.arr[rightI] || this.arr[leftI].priority <= this.arr[rightI].priority) {
        const temp = this.arr[i]
        this.arr[i] = this.arr[leftI]
        this.arr[leftI] = temp
        i = leftI
      } else {
        const temp = this.arr[i]
        this.arr[i] = this.arr[rightI]
        this.arr[rightI] = temp
        i = rightI
      }
      leftI = i * 2 + 1
      rightI = i * 2 + 2
    }

    return oldRoot
  }
  dequeue() {
    if (this.arr.length <= 1) return this.arr.pop()

    const oldRoot = this.arr[0]
    this.arr[0] = this.arr.pop()

    let i = 0
    let leftI = i * 2 + 1
    let rightI = i * 2 + 2
    while ((this.arr[leftI] && this.arr[i].priority > this.arr[leftI].priority)
    || (this.arr[rightI] && this.arr[i].priority > this.arr[rightI].priority)) {
      if (!this.arr[rightI] || this.arr[leftI].priority <= this.arr[rightI].priority) {
        const temp = this.arr[i]
        this.arr[i] = this.arr[leftI]
        this.arr[leftI] = temp
        i = leftI
      } else {
        const temp = this.arr[i]
        this.arr[i] = this.arr[rightI]
        this.arr[rightI] = temp
        i = rightI
      }
      leftI = i * 2 + 1
      rightI = i * 2 + 2
    }

    return oldRoot
  }
}

module.exports = PriorityQueue
