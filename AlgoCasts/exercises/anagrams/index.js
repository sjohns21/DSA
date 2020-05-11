// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanA = stringA.replace(/\W/g,"").toLowerCase()
  const cleanB = stringB.replace(/\W/g,"").toLowerCase()
  if(cleanA.length !== cleanB.length){
    return false
  }

  const mapA = makeMap(cleanA)
  const mapB = makeMap(cleanB)

  for(const key in mapA){
    if(mapA[key] !== mapB[key]){
      return false
    }
  }

  return true

}

function makeMap(string){
  const d = {}
  for(const character of string){
    d[character] = d[character] + 1 || 1
  }
  return d
}

module.exports = anagrams;
