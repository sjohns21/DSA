// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let d = {}
  let max = 0
  let maxChar
  for(let char of str){
    d[char] = d[char] + 1 || 1
    if(d[char]>max){
      max = d[char]
      maxChar = char
    }
  }
  return maxChar
}

// maxChar("abcccccccd")
maxChar("apple 1231111")

module.exports = maxChar;
