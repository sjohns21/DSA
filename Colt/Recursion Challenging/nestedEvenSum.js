function nestedEvenSum(arg) {
  if (typeof arg === "number") {
    return (arg % 2 === 0) ? arg : 0
  } else if (typeof arg === "object") {
    return Object.values(arg).reduce((sum, current) => {
      return sum + nestedEvenSum(current)
    }, 0)
  } else {
    return 0
  }
}

module.exports = nestedEvenSum
