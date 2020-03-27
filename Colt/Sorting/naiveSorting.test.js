const {bubbleSort, selectionSort, insertionSort} = require("./naiveSorting")

test("bubbleSort",()=>{
  expect(bubbleSort([4,2,1,3])).toStrictEqual([1,2,3,4])
  expect(bubbleSort([1,2,3,4])).toStrictEqual([1,2,3,4])
  expect(bubbleSort([4,1])).toStrictEqual([1,4])
  expect(bubbleSort([1])).toStrictEqual([1])
})

test("selectionSort",()=>{
  expect(selectionSort([4,2,1,3])).toStrictEqual([1,2,3,4])
  expect(selectionSort([1,2,3,4])).toStrictEqual([1,2,3,4])
  expect(selectionSort([4,1])).toStrictEqual([1,4])
  expect(selectionSort([1])).toStrictEqual([1])
})

test("insertionSort",()=>{
  expect(insertionSort([4,2,1,3])).toStrictEqual([1,2,3,4])
  expect(insertionSort([1,2,3,4])).toStrictEqual([1,2,3,4])
  expect(insertionSort([4,1])).toStrictEqual([1,4])
  expect(insertionSort([1])).toStrictEqual([1])
  expect(insertionSort([5,4,6,3,1,2])).toStrictEqual([1,2,3,4,5,6])
})
