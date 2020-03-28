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

function radixSortA(array) {
  let maxLength = 0
  for (const number of array) {
    if (String(number).length > maxLength) maxLength = String(number).length
  }
  let a = [array]
  let b = []
  for (let place = 0; place < maxLength; place++) {
    let bucketIndex = 0

    while (bucketIndex < 10) {
      const number = a[bucketIndex] && a[bucketIndex].shift()
      if (number === undefined) {
        bucketIndex++
        continue
      }
      const digit = String(number)[String(number).length - 1 - place]
      //push into numbers
      if (digit) {
        if (b[digit]) b[digit].push(number)
        else b[digit] = [number]
      } else {
        if (b[0]) b[0].push(number)
        else b[0] = [number]
      }

    }
    a = b
    b = []

  }
  //ES2019
  return a.flat()

  // return flatten(a)
}

function flatten(array) {
  if (array.length <= 1) return array
  let result = []
  array.forEach(element => {
    if (Array.isArray(element)) result = result.concat(flatten(element))
    else result.push(element)
  })
  return result
}

function radixSortB(array) {
  let maxLength = 0
  for (const number of array) {
    maxLength = Math.max(String(number).length, maxLength)
  }

  for (let place = 0; place < maxLength; place++) {
    let buckets = Array.from({length: 10}, () => [])

    for (let i = 0; i < array.length; i++) {
      const number = array[i]
      let digit = String(number)[String(number).length - 1 - place]
      if (!digit) digit = 0
      buckets[digit].push(number)
    }
    array = [].concat(...buckets)
  }
  return array

}

module.exports = {merge, mergeSort, pivot, quickSort, radixSort: radixSortB}
