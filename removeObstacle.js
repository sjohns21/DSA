// starting at (0, 0), find the shortest path to the cell with 9
// cells with 1 can be crossed, cells with 0 cannot be crossed
// return the length of the shortest path

function removeObstacleDFS(numRows, numColumns, lot) {
  const visited = {}
  let result

  function explore(i, j, steps) {

    if (visited[`${i}, ${j}`]) return
    visited[`${i}, ${j}`] = true

    if (i < 0 || i >= numRows || j < 0 || j >= numColumns) return
    if (lot[i] && lot[i][j] === 0) return

    if (lot[i] && lot[i][j] === 9) {
      result = steps
      return
    }
    explore(i + 1, j, steps + 1) //down
    explore(i, j + 1, steps + 1) //right
    explore(i, j - 1, steps + 1) //left
    explore(i - 1, j, steps + 1) //up
  }

  explore(0, 0, 0)
  return result
}

function removeObstacleBFS(numRows, numColumns, lot) {
  const visited = {}
  let steps = 0
  const toSearch = [[0, 0], "step"]
  while (toSearch.length) {

    const shifted = toSearch.shift()
    let i, j
    if (shifted === "step") {
      toSearch.push("step")
      steps++
      continue
    } else [i, j] = shifted

    if (!visited[`${i}, ${j}`]) {
      visited[`${i}, ${j}`] = true

      if (i < 0 || i >= numRows || j < 0 || j >= numColumns) continue
      if (lot[i][j] === 0) continue

      if (lot[i][j] === 9) return steps

      toSearch.push([i + 1, j]) // down
      toSearch.push([i, j + 1]) // right
      toSearch.push([i, j - 1]) // left
      toSearch.push([i - 1, j]) // up
    }
  }
}

module.exports = removeObstacleBFS
