class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight})
    this.adjacencyList[vertex2].push({node: vertex1, weight})
  }

  Dijkstra(start, end) {
    const q = new PriorityQueue()
    const distances = {}
    const previous = {}
    const visited = new Set()

    Object.keys(this.adjacencyList).forEach(vertex => {
      if (vertex === start) {
        q.enqueue(start, 0)
        distances[start] = 0
      } else {
        distances[vertex] = Infinity
      }
      previous[vertex] = null
    })

    while (q.values.length) {
      const current = q.dequeue().val
      if(current === end) break
      if(visited.has(current)) continue
      const distanceToHere = distances[current]
      this.adjacencyList[current].forEach(neighbor => {
        const distanceToThere = distanceToHere + neighbor.weight
        if (distanceToThere < distances[neighbor.node]) {
          distances[neighbor.node] = distanceToThere
          if (!visited.has(neighbor.node)) q.enqueue(neighbor.node, distanceToThere)
          previous[neighbor.node] = current
        }
      })
      visited.add(current)
    }

    let cur = end
    const result = [end]
    while (cur !== start) {
      cur = previous[cur]
      result.push(cur)
    }
    result.reverse()

    return result
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if(element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

module.exports = WeightedGraph
