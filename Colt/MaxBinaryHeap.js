class MaxBinaryHeap {
  constructor(arr) {
    this.arr = [...arr]
  }

  insert(adding) {
    this.arr.push(adding)
    let right = this.arr.length - 1
    let left = Math.floor((right - 1) / 2)
    while (this.arr[left] < this.arr[right]) {
      const temp = this.arr[left]
      this.arr[left] = this.arr[right]
      this.arr[right] = temp
      right = left
      left = Math.floor((right - 1) / 2)
    }
  }

  extractMax() {
    if(this.arr.length <= 1) {
      const a = this.arr[0]
      this.arr = []
      return a
    }
    const oldRoot = this.arr[0]

    this.arr[0] = this.arr.pop()

    let i = 0
    let leftI = i * 2 + 1
    let rightI = i * 2 + 2
    while (this.arr[i] < this.arr[leftI] || this.arr[i] < this.arr[rightI]) {
      if (!this.arr[rightI] || this.arr[leftI] >= this.arr[rightI]) {
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

module.exports = MaxBinaryHeap
