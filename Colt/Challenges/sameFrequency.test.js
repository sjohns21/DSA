const sameFrequency = require("./sameFrequency")

test("a",()=>{
  expect(sameFrequency(3589578, 5879385)).toBe(true)
  expect(sameFrequency(34,14)).toBe(false)
})
