// function maxSubarraySum(arr, num) {
//   if(num > arr.length) return null
//
//   let maxSum = 0
//
//   for (let i = 0; i <= arr.length - num; i++) {
//     const localSum = arr.slice(i, i + num).reduce(
//       (total, current) => {
//         return total + current
//       }, 0)
//     if (localSum > maxSum){
//       // console.log(localSum)
//       maxSum = localSum
//     }
//   }
//   return maxSum
// }
function maxSubarraySum(arr, num) {
  if(num > arr.length) return null

  let maxSum = 0

  let i = 0
  let j = i + num
  let localSum = arr.slice(i, j).reduce(
    (total, current) => {
      return total + current
    }, 0)
  if (localSum > maxSum){
    // console.log(localSum)
    maxSum = localSum
  }
  while(j < arr.length){
    localSum -= arr[i]
    localSum += arr[j]
    if (localSum > maxSum){
      // console.log(localSum)
      maxSum = localSum
    }
    i++
    j++
  }
  return maxSum
}

module.exports = maxSubarraySum
