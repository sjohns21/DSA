const {binarySearch, stringSearch} = require("./searching")

test("binarySearch",()=>{
  const array = [1,2,3,4,5]
  expect(binarySearch(array, -1)).toBe(-1)
  expect(binarySearch(array, 1)).toBe(0)
  expect(binarySearch(array, 2)).toBe(1)
  expect(binarySearch(array, 3)).toBe(2)
  expect(binarySearch(array, 4)).toBe(3)
  expect(binarySearch(array, 5)).toBe(4)
  expect(binarySearch(array, 6)).toBe(-1)
})

test("stringSearch",()=>{
  const substring = "abc"
  expect(stringSearch("", substring)).toBe(0)
  expect(stringSearch("abc", substring)).toBe(1)
  expect(stringSearch("abcd", substring)).toBe(1)
  expect(stringSearch("abcdeabcde", substring)).toBe(2)
})
