// function minSubArrayLen(arr, target){
//   let minLength = Infinity
//
//   for(let i = 0; i < arr.length; i++){
//     let j = i + 1
//     let window = arr.slice(i,j)
//     let windowSum = arr[i]
//
//     while(windowSum < target && j <= arr.length){
//       j++
//       window = arr.slice(i,j)
//       windowSum = window.reduce((total, current) => {
//         return total + current
//       })
//     }
//     if(windowSum >= target){
//       let minLengthLocal = j - i
//       if(minLengthLocal < minLength) {
//         minLength = minLengthLocal
//       }
//     }
//   }
//
//   if(minLength === Infinity) return 0
//   return minLength
// }
function minSubArrayLen(arr, target) {
  let minLength = Infinity
  let l = 0
  for (let r = 1; r <= arr.length; r++) {
    while (arr.slice(l + 1, r).reduce((t, c) => t + c, 0) >= target) {
      l++
    }
    if(arr.slice(l, r).reduce((t, c) => t + c) >= target){
      if (r - l < minLength) minLength = r - l
    }

  }

  if (minLength === Infinity) return 0
  return minLength
}

module.exports = minSubArrayLen
