function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length) return false

  const str1counts = {}
  for(let char of str1){
    str1counts[char] = str1counts[char] + 1 || 1
  }
  const str2counts = {}
  for(let char of str2){
    str2counts[char] = str2counts[char] + 1 || 1
  }

  for(let [char, count] of Object.entries(str1counts)){
    if(str2counts[char] !== count) return false
  }
  return true
}

module.exports = validAnagram
