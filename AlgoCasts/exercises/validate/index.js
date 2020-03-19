// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -Infinity, max = Infinity) {
  // console.log(node.data, min, max)
  if (node.data < min || node.data > max) {
    return false
  } else if (node.left) {
    return validate(node.left, min, node.data)
  } else if (node.right) {
    return validate(node.right, node.data, max)
  }
  return true
}

module.exports = validate
