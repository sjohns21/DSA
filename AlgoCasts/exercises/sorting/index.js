// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}

function mergeSort(arr) {
  const middleIndex = Math.floor(arr.length / 2)
  let left = arr.slice(0, middleIndex)
  let right = arr.slice(middleIndex)
  if(left.length > 1) left = mergeSort(left)
  if(right.length > 1) right = mergeSort(right)
  return merge(left, right)
}

function merge(left, right) {
  const merged = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i])
      i++
    } else {
      merged.push(right[j])
      j++
    }
  }
  merged.push(...left.slice(i), ...right.slice(j))
  return merged
}

module.exports = {bubbleSort, selectionSort, mergeSort, merge}
