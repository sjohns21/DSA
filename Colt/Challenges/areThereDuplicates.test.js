const areThereDuplicates = require("./areThereDuplicates")

test("a",()=>{
  expect(areThereDuplicates(1,2,3)).toBe(false)
  expect(areThereDuplicates('a','b','c','a')).toBe(true)
})
