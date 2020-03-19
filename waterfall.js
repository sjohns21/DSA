const solution = (pot) => {
  const visited = {}
  const search = (i, j) => {
    visited[String(i) + "-" + String(j)] = true
    console.log('searching ' + i + " " + j)
    if (i === pot.length) {
      console.log('success')
      return true
    }
    const value = pot[i] && pot[i][j]
    if (value === 1 || value === undefined) return false
//         const value = pot[i] && pot[i][j]
//         const up = pot[i-1] && pot[i-1][j]
//         const down = pot[i+1] && pot[i+1][j]
//         const left = pot[i] && pot[i][j-1]
//         const right = pot[i] && pot[i][j+1]
//         console.log(up,down,left,right)
//         console.log(i,j,value)
//         if(up) search(i-1, j)
    if (!visited[String(i + 1) + "-" + String(j)] && search(i + 1, j)) {
      return true
    } else if (!visited[String(i - 1) + "-" + String(j)] && search(i - 1, j)) {
      return true
    } else if (!visited[String(i) + "-" + String(j - 1)] && search(i, j - 1)) {
      return true
    } else if (!visited[String(i) + "-" + String(j + 1)] && search(i, j + 1)) {
      return true
    }
    return false
//         if(left) search(i,j-1)
//         if(right) search(i,j+1)
//         if(value === undefined || value === 1) return null

  }
  for (let j = 0; j < pot[0].length; j++) {
    if (search(0, j)) {
      return true
    } else {
      continue
    }
  }
}
console.log(solution([[0, 1], [0, 1]]))
console.log('--')
// console.log(solution([[0,0],[1,1]]))

