// return the index of the value in the sorted array
// function binarySearch(array, value) {
//   let left = -1, right = array.length
//   let i = 0
//   while(left < (right - 1 ) && i < 100){
//     const middle = Math.floor((right - left) / 2 + left)
//     const middleValue = array[middle]
//     // console.log('left', left, 'right', right, 'middle', middle, 'middleValue', middleValue)
//     if (middleValue === value) {
//       return middle
//     } else if (middleValue < value) { //move window right
//       left = middle
//     } else if (middleValue > value) { //move window left
//       right = middle
//     }
//     i++
//   }
//   return -1
// }
function binarySearch(array, value) {
  let left = 0, right = array.length - 1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2 + left)
    const middleValue = array[middle]
    // console.log('left', left, 'right', right, 'middle', middle, 'middleValue', middleValue)
    if (middleValue === value) return middle
    else if (middleValue < value) left = middle + 1
    else if (middleValue > value) right = middle - 1
  }
  return -1
}

//count number of occurrences of substring in string
// function stringSearch(string, substring) {
//   let count = 0
//   let i = 0, j = 0
//   while (i < string.length) {
//     if (string[i] === substring[j]) {
//       i++
//       j++
//       if (j === substring.length) {
//         count++
//         j = 0
//       }
//     } else {
//       i++
//       j = 0
//     }
//   }
//   return count
// }
function stringSearch(string, substring) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      // console.log('i',i,'j',j)
      if (string[i + j] !== substring[j]) break
      else if (j === substring.length - 1) count++
    }
  }
  return count
}

module.exports = {binarySearch, stringSearch}
