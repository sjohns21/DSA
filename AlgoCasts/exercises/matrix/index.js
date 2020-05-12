// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let rows = []
  for (let i = 0; i < n; i++) {
    rows.push([])
  }
  let iLowerBound = 0
  let jUpperBound = n - 1
  let iUpperBound = n - 1
  let jLowerBound = 0
  let direction = "jPlus"
  let i = 0
  let j = -1
  for (let k = 0; k < n ** 2; k++) {
    const value = k + 1
    console.log('value', value)

    if (direction === "jPlus") {
      j++
      if (j === jUpperBound) {
        iLowerBound++
        direction = "iPlus"
      }
    } else if (direction === "jMinus") {
      j--
      if (j === jLowerBound) {
        iUpperBound--
        direction = "iMinus"
      }
    } else if (direction === "iMinus") {
      i--
      if (i === iLowerBound) {
        jLowerBound++
        direction = "jPlus"
      }
    } else if (direction === "iPlus") {
      i++
      if (i === iUpperBound) {
        jUpperBound--
        direction = "jMinus"
      }
    }
    // console.log('i', i, 'j', j)
    rows[i][j] = value
    // console.log('rows', rows)
  }

  return rows
}

module.exports = matrix
