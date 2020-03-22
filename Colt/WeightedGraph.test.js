const WeightedGraph = require("./WeightedGraph")

test("addVertex", () => {
  const g = new WeightedGraph()
  g.addVertex("a")
  expect(g.adjacencyList["a"]).toStrictEqual([])
})

test("Dijkstra", () => {
  const g = new WeightedGraph()
  g.addVertex("a")
  g.addVertex("b")
  g.addVertex("c")
  g.addVertex("d")
  g.addVertex("e")
  g.addVertex("f")

  g.addEdge('a','b',4)
  g.addEdge('b','e',3)
  g.addEdge('a','c',2)
  g.addEdge('c','d',2)
  g.addEdge('d','e',3)
  g.addEdge('c','f',4)
  g.addEdge('d','f',1)
  g.addEdge('f','e',1)

  expect(g.Dijkstra('a','e')).toStrictEqual(['a','c','d','f','e'])
})
