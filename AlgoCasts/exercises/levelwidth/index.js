// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = [0]
  let q = [root, "break"]
  let node
  while (q.length > 1) {
    node = q.shift()
    if (node === "break") {
      widths.push(0)
      q.push("break")
    } else {
      widths[widths.length - 1]++
      q.push(...node.children)
    }
    // console.log(q, widths)
  }
  return widths

}

module.exports = levelWidth
