const factorial = require("./factorial")

test("a",()=>{
  expect(factorial(1)).toBe(1)
  expect(factorial(2)).toBe(2)
  expect(factorial(4)).toBe(24)
  expect(factorial(7)).toBe(5040)
})
