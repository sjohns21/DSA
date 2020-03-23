function sameFrequency(num1, num2){
  const str1 = String(num1)
  const str2 = String(num2)

  const count1 = {}
  for(const digit of str1){
    count1[digit] = count1[digit] + 1 || 1
  }
  const count2 = {}
  for(const digit of str2){
    count2[digit] = count2[digit] + 1 || 1
  }

  if(Object.keys(count1).length !== Object.keys(count2).length) return false

  for(const [digit, count] of Object.entries(count1)){
    if(count2[digit] !== count) return false
  }
  return true
}
module.exports = sameFrequency
