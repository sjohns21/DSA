// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function outer(n) {

  let oldFibCount = 0

  function oldFib(n) {
    oldFibCount++
    if (n === 0) return 0
    if (n === 1) return 1
    return oldFib(n - 1) + oldFib(n - 2)
  }

  const memo = {}
  let newFibCount = 0
  const newFib = (n) => {
    newFibCount += 1
    if (memo[n]) return memo[n]

    if (n === 0) return 0
    if (n === 1) return 1

    const a = newFib(n - 1)
    const b = newFib(n - 2)

    const result = a + b
    memo[n] = result

    return result
  }

  const newFibResult = newFib(n)
  oldFib(n)
  // console.log('oldFibCount', oldFibCount, 'newFibCount', newFibCount)
  return newFibResult
}


module.exports = outer
