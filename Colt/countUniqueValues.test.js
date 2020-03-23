const countUniqueValues = require("./countUniqueValues")

test("a", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4)
})
