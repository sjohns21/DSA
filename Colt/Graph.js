class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(a, b) {
    if (this.adjacencyList[a]) this.adjacencyList[a].push(b)
    if (this.adjacencyList[b]) this.adjacencyList[b].push(a)
  }

  removeEdge(a, b) {
    if (this.adjacencyList[a]) {
      this.adjacencyList[a] = this.adjacencyList[a].filter(vertex => vertex !== b)
    }
    if (this.adjacencyList[b]) {
      this.adjacencyList[b] = this.adjacencyList[b].filter(vertex => vertex !== a)
    }
  }

  removeVertex(a) {
    if (this.adjacencyList[a]) {
      this.adjacencyList[a].forEach(b => {
          this.removeEdge(a, b)
        }
      )
      delete this.adjacencyList[a]
    }
  }

  DFSRecursive(entryVertex) {
    const visitedArray = []
    const visitedSet = new Set()

    const r = (vertex) => {
      visitedArray.push(vertex)
      visitedSet.add(vertex)

      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!visitedSet.has(adjacentVertex)) r(adjacentVertex)
      })
    }

    r(entryVertex)

    return visitedArray
  }

  DFSIterative(entryVertex) {
    const result = []
    const stacked = new Set(entryVertex)
    const stack = [entryVertex]

    while (stack.length) {
      const vertex = stack.pop()
      result.push(vertex)

      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!stacked.has(adjacentVertex)){
          stacked.add(adjacentVertex)
          stack.push(adjacentVertex)
        }
      })
    }

    return result
  }

  BFS(entryVertex) {
    const result = []
    const qed = new Set(entryVertex)
    const q = [entryVertex]

    while (q.length) {
      const vertex = q.shift()
      result.push(vertex)

      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!qed.has(adjacentVertex)){
          qed.add(adjacentVertex)
          q.push(adjacentVertex)
        }
      })
    }

    return result
  }
}

module.exports = Graph
