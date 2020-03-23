function findLongestSubstring(str){
  if(str.length === 0) return 0
  const set = new Set(str[0])
  let l = 0
  let maxLen = 0
  for(let r = 1; r < str.length; r++){
    while(set.has(str[r])){
      set.delete(str[l])
      l++
    }
    set.add(str[r])
    if(set.size > maxLen){
      maxLen = set.size
    }
  }
  return maxLen
}
module.exports = findLongestSubstring
