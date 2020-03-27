function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let swapMade = false
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swapMade = true
      }
    }
    if (!swapMade) break
  }
  return array
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
    }
    (min !== i) ? [array[i], array[min]] = [array[min], array[i]] : null
  }
  return array
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= -1; j--) {
      if (j === -1) {
        array = [array[i]].concat(array.slice(0,i)).concat(array.slice(i+1))
      }
      if (array[j] < array[i]) {
        array = array.slice(0, j + 1).concat([array[i]]).concat(array.slice(j + 1, i)).concat(array.slice(i + 1))
        break
      }
    }
  }
  return array
}

module.exports = {bubbleSort, selectionSort, insertionSort}
