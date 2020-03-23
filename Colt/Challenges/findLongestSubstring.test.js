const findLongestSubstring = require("./findLongestSubstring")

test("a", ()=>{
  expect(findLongestSubstring('')).toBe(0)
  expect(findLongestSubstring('rithmschool')).toBe(7)
  expect(findLongestSubstring('thisisawesome')).toBe(6)
  expect(findLongestSubstring('thecatinthehat')).toBe(7)
  expect(findLongestSubstring('bbbbbbb')).toBe(1)
})
