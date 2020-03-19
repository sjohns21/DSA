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
//       '  #  ' //i = 0; hash start at 2, stop at 3
//       ' ### ' //i = 1; hash start at 1, stop at 4
//       '#####'

function pyramid(n) {
  // console.log('k')
  const width = (n * 2 - 1)
  // console.log(width)
  for (let i = 0; i < n; i++) {
    // console.log(i)
    let string = ""
    const hashStart = n - i - 1 //blanks on each side //rows from bottom
    // console.log(hashStart)
    const hashEnd = hashStart + i * 2 + 1 //blanks on each side //rows from bottom
    // console.log(hashEnd)
    // const hashes = (i + 1) * 2
    for (let j = 0; j < width; j++) {
      if (j < hashStart) string += " "
      else if (j < hashEnd) string += "#"
      else string += " "
    }
    console.log(string)
  }
}

// console.log('k')
pyramid(3)

module.exports = pyramid
