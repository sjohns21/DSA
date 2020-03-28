const {merge, mergeSort, pivot, quickSort} = require("./intermediateSorting")

test("merge", () => {
  expect(merge([1, 3], [2, 4])).toStrictEqual([1, 2, 3, 4])
  expect(merge([], [])).toStrictEqual([])
  expect(merge([1], [2])).toStrictEqual([1, 2])
  expect(merge([1, 3, 5], [2, 4])).toStrictEqual([1, 2, 3, 4, 5])
})

test("mergeSort", () => {
  expect(mergeSort([3,1,4,2])).toStrictEqual([1,2,3,4])
  expect(mergeSort([])).toStrictEqual([])
  expect(mergeSort([1])).toStrictEqual([1])
  expect(mergeSort([1,2])).toStrictEqual([1,2])
})

test("pivot", () => {
  const array = [5,2,1,8,4,7,6,3]
  expect(pivot(array)).toBe(4)
})

test("quickSort", () => {
  const array = [5,2,1,8,4,7,6,3]
  expect(quickSort(array)).toStrictEqual([1,2,3,4,5,6,7,8])
})
