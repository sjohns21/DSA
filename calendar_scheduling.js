// sample input
// [["9:00","10:30"],["12:00","13:00"],["16:00","18:00"]]
// ["9:00","20:00"]
// [["10:00","11:30"],["12:30","14:30"],["14:30","15:00"],["16:00","17:00"]]
// ["10:00","18:30"]
// sample output: [["11:30","12:00"],["15:00","16:00"],["18:00","18:30"]]

const f = (input0, window0, input1, window1) => {
  const blocks = []
  for (let i = 0; i < 48; i++) {
    blocks[i] = false
  }
  fillBlocks(input0, blocks)
  fillBlocks(input1, blocks)

  //find max start and min end
  const start = Math.max(convertToIndex(window0[0]), convertToIndex(window1[0]))
  const end = Math.min(convertToIndex(window0[1]), convertToIndex(window1[1]))
  // console.log(end)
  const output = []
  let timeBlock = []
  let length = 0
  // console.log(blocks)
  // console.log(convertToIndex("18:30"))
  // console.log(convertToTime(37))
  // console.log(blocks[36])
  // console.log(end) // 36
  for (let i = start; i < end; i++) {
    if (!blocks[i]) {
      // console.log(i)
      if(timeBlock[0]){
        // console.log(timeBlock[0])
        length++
        // console.log(length)
      } else {
        timeBlock[0] = convertToTime(i)
        // console.log(timeBlock)
        // console.log(i)
      }
    } else if (blocks[i] && timeBlock[0]){ //only push in when true = booked is hit
      // console.log(length)
      timeBlock[1] = convertToTime(i )
      // console.log(timeBlock)
      output.push(timeBlock)
      timeBlock = []
      length = 0
    }
  }
  if(timeBlock[0]){
    timeBlock[1] = convertToTime(convertToIndex(timeBlock[0])+1)
    // console.log(timeBlock)
    output.push(timeBlock)
  }

  console.log(output)
}

const fillBlocks = (input, blocks) => {
  // create 30 min availability
  input.forEach(timeBlock => {
    //convert time to 30 min time
    const start = convertToIndex(timeBlock[0])

    const end = convertToIndex(timeBlock[1])

    // console.log(start, end)
    for (let i = start; i < end; i++) {
      blocks[i] = true //booked
    }
    // console.log(blocks)
  })
}

const convertToIndex = (time) => {
  const hour = time.split(":")[0]
  const minute = time.split(":")[1]
  const index = hour * 2 + minute / 30
  return index
}
const convertToTime = (index) => {
  const hour = Math.floor(index / 2)
  const minute = index % 2 * 30
  return String(hour) + ":" + String(minute).padStart(2,"0")
}
f([["9:00", "10:30"], ["12:00", "13:00"], ["16:00", "18:00"]], ["9:00", "20:00"], [["10:00", "11:30"], ["12:30", "14:30"], ["14:30", "15:00"], ["16:00", "17:00"]], ["10:00", "18:30"])

// console.log(convertToTime(3)) //
