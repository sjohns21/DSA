const isSubsequence = require("./isSubsequence")

test("a",()=>{
  expect(isSubsequence('hello','hello world')).toBe(true)
  expect(isSubsequence('sing','string')).toBe(true)
  expect(isSubsequence('abc', 'abracadabra')).toBe(true)
  expect(isSubsequence('abc','acb')).toBe(false)
})
