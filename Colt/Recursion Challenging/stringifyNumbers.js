function stringifyNumbers(arg){
  if(typeof arg === "number"){
    return String(arg)
  } else if (typeof arg === "object"){
    const newObj = Array.isArray(arg)? [] : {}
    Object.entries(arg).forEach(([key, val])=>{
      newObj[key] = stringifyNumbers(val)
    })
    return newObj
  } else {
    return arg
  }
}

module.exports = stringifyNumbers
