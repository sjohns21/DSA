// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let prefix = ""
  if (n < 0) prefix = "-"
  let str = prefix + String(n).replace(/\W/,"").split("").reverse().join("")
  return Number(str)
}

module.exports = reverseInt;
