function isSubsequence(str1, str2) {
  let i = 0
  for(let char of str2){
    if(str1[i] === char){
      i++
    }
    if(i === str1.length) return true
  }
  return false
}
module.exports = isSubsequence
