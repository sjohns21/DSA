// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' i=0   space (per side) = n - 1 - i   hashes = 2i + 1
//       ' ### ' 
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    const spaces = n - 1 - i
    let spacesString = ""
    for (let j = 0; j < spaces; j++) {
      spacesString += " "
    }

    const hashes = 2 * i + 1
    let hashesString = ""
    for (let j = 0; j < hashes; j++) {
      hashesString += "#"
    }

    console.log(spacesString + hashesString + spacesString)
  }
}

module.exports = pyramid
