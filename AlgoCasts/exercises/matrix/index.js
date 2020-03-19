// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //generate rows
  // const rows = new Array(n).fill(new Array(n).fill(0))
  let rows = []
  for(let i = 0; i< n; i++){
    rows.push([])
  }
  // console.log(rows)
  let topEdge = -1;
  let rightEdge = n;
  let bottomEdge = n;
  let leftEdge = -1;
  let direction = "right"
  let x = 0;
  let y = 0;
  for(let i = 0; i < n ** 2; i++){
    const value = i + 1
    console.log(x,y)
    // console.log(value)
    rows[y][x] = value

    if(direction === "right"){
      x++
      if(x===rightEdge){
        topEdge++
        // console.log(topEdge)
        direction = "down"
        x--
        y++
      }
    } else if (direction === "left"){
      x--
      if(x===leftEdge){
        bottomEdge--
        direction = "up"
        x++
        y--
      }
    } else if (direction === "up"){
      y--
      if(y===topEdge){
        leftEdge++
        direction = "right"
        y++
        x++
      }
    }else if (direction === "down"){
      y++
      if(y===bottomEdge){
        rightEdge--
        direction = "left"
        y--
        x--
      }
    }
  }
    console.log(rows)
    return rows
  // console.log(rows)
  //fill top edge
  //fill right edge
  //fill bottom edge
  //fill left edge

  //increment topPadding
  //fill topRow until hitting rightEdge
}
matrix(3)

module.exports = matrix;
