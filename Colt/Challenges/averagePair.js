function averagePair(arr, target){
  let left = 0
  let right = arr.length - 1

  while(left < right){
    let avg = (arr[left] + arr[right]) / 2
    if(avg < target){
      left++
    } else if (avg > target) {
      right--
    } else {
      return true
    }
  }
  return false
}
module.exports = averagePair
