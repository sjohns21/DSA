const Graph = require("./Graph")

test("addVertex", () => {
  const g = new Graph()
  g.addVertex("a")
  expect(g.adjacencyList["a"]).toStrictEqual([])
})

test("addEdge", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addEdge("a", "b")
  expect(g.adjacencyList["a"]).toStrictEqual(["b"])
  expect(g.adjacencyList["b"]).toStrictEqual(["a"])
})

test("removeEdge", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addEdge("a", "b")
  g.addEdge("a", "c")
  g.removeEdge("a","b")
  expect(g.adjacencyList["a"]).toStrictEqual(["c"])
  expect(g.adjacencyList["b"]).toStrictEqual([])
})

test("removeVertex", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addEdge("a", "b")
  g.addEdge("a", "c")
  g.removeVertex("b")
  expect(g.adjacencyList["a"]).toStrictEqual(["c"])
  expect(g.adjacencyList["b"]).toBeUndefined()
})

test("DFSRecursive", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addVertex("d")
  g.addVertex("e")
  g.addVertex("f")

  g.addEdge("a", "b")
  g.addEdge("a", "c")
  g.addEdge("b", "d")
  g.addEdge("c", "e")
  g.addEdge("d","e")
  g.addEdge("d","f")
  g.addEdge("e","f")

  expect(g.DFSRecursive("a")).toStrictEqual(['a','b','d','e','c','f'])
})

test("DFSIterative", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addVertex("d")
  g.addVertex("e")
  g.addVertex("f")

  g.addEdge("a", "b")
  g.addEdge("a", "c")
  g.addEdge("b", "d")
  g.addEdge("c", "e")
  g.addEdge("d","e")
  g.addEdge("d","f")
  g.addEdge("e","f")

  expect(g.DFSIterative("a")).toStrictEqual(['a','c','e','f','d','b'])
})

test("BFS", () => {
  const g = new Graph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addVertex("d")
  g.addVertex("e")
  g.addVertex("f")

  g.addEdge("a", "b")
  g.addEdge("a", "c")
  g.addEdge("b", "d")
  g.addEdge("c", "e")
  g.addEdge("d","e")
  g.addEdge("d","f")
  g.addEdge("e","f")

  expect(g.BFS("a")).toStrictEqual(['a','b','c','d','e','f'])
})
