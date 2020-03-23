function areThereDuplicates(...args){
  const set = new Set()
  for(const arg of args){
    if(set.has(arg)) return true
    set.add(arg)
  }
  return false
}
module.exports = areThereDuplicates
