function collectStrings(arg) {
  if (typeof arg === "string") {
    return [arg]
  } else if (typeof arg === "object") {
    const arr = []
    Object.values(arg).forEach(val => {
      arr.push(...collectStrings(val))
    })
    return arr
  } else {
    return []
  }
}

module.exports = collectStrings
