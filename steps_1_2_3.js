
const solution = (n) => {
  // Type your solution here
  // if on top, add one to solutionCount
  return r(0,0,n)

};
const r = (current, jump, end) => {
  console.log(current, jump, end)
  current += jump
  if(current === end){
    console.log('plusOne', current, jump, end)
    return 1
  }
  if(current > end) return 0

  const from1 = r(current, 1, end)
  console.log('from1', from1)
  const from2 = r(current, 2, end)
  console.log('from2', from2)
  const from3 = r(current, 3, end)
  console.log('from3', from3)

//         return from1
  return from1 + from2 + from3
}

