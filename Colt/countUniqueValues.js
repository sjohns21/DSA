function countUniqueValues(arr){
  // const counts = {}
  // for(let item of arr){
  //   counts[item] = counts[item] + 1 || 1
  // }
  // return Object.keys(counts).length

  //going for constant space
  let count = 0
  for(let [index, item] of Object.entries(arr)){
    if(arr[index-1] !== item) count++
  }
  return count
}
module.exports = countUniqueValues
