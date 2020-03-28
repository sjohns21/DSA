function merge(array1, array2) {
  let left = 0, right = 0
  const newArray = []
  while (left < array1.length && right < array2.length) {
    if (array1[left] < array2[right]) {
      newArray.push(array1[left])
      left++
    } else {
      newArray.push(array2[right])
      right++
    }
  }
  if (left < array1.length) {
    newArray.push(...array1.slice(left))
  } else if (right < array2.length) {
    newArray.push(...array2.slice(right))
  }
  return newArray
}

function mergeSort(array) {
  if (array.length <= 1) return array

  const midpoint = Math.floor(array.length / 2)
  const leftUnsorted = array.slice(0, midpoint)
  const rightUnsorted = array.slice(midpoint)

  const leftSorted = mergeSort(leftUnsorted)
  const rightSorted = mergeSort(rightUnsorted)

  return merge(leftSorted, rightSorted)
}

const pivot = (array, start = 0, end = array.length - 1) => {
  const value = array[start]
  let pivot = start
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < value) {
      pivot++
      [array[pivot], array[i]] = [array[i], array[pivot]]
    }
  }
  [array[start], array[pivot]] = [array[pivot], array[start]]
  return pivot
}

const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    const pivotPoint = pivot(array, start, end)
    quickSort(array, start, pivotPoint - 1)
    quickSort(array, pivotPoint + 1, end)
  }
  return array

}

module.exports = {merge, mergeSort, pivot, quickSort}
