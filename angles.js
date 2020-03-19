
const solution = (angles) => {
  let ret = ""
  // Type your solution here
  let leftBalance = 0
//     let rightBalance = 0
  let unmatchedRight = 0
  for(let char of angles){
    if(char === ">"){
      if(leftBalance > 0){
        leftBalance--
      } else {
        unmatchedRight++
      }
    } else if(char === "<") {
//             if(rightBalance > 0){
//                 rightBalance--
//             } else {
      leftBalance++
//             }
    }
  }
  for(let i=0;i<unmatchedRight;i++){
    ret += "<"
  }
  ret += angles
  for(let i=0;i<leftBalance;i++){
    ret += ">"
  }

  console.log('leftBalance', leftBalance)
//     console.log('rightBalance', rightBalance)
  console.log('unmatchedRight', unmatchedRight)
  return ret
};

