const {bubbleSort, selectionSort} = require("./naiveSorting")

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
