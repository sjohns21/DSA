const validAnagram = require("./validAnagram")

test("a",()=>{
  expect(validAnagram('aaz','zza')).toBe(false)
  expect(validAnagram('anagram','nagaram')).toBe(true)

})
