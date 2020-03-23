const minSubArrayLen = require("./minSubArrayLen")

test("a",()=>{
  expect(minSubArrayLen([2,3,1,2,4,3],7)).toBe(2)
  expect(minSubArrayLen([2,1,6,5,4],9)).toBe(2)
  expect(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)).toBe(1)
  expect(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)).toBe(3)
  expect(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)).toBe(0)
})
