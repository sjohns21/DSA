class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key, arrayLen) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total
  }

  set(key, value) {
    const hash = this._hash(key, this.keyMap.length)
    const location = this.keyMap[hash]
    if (!location) {
      this.keyMap[hash] = [[key, value]]
    } else {
      this.keyMap[hash].push([key, value])
    }
  }

  get(key) {
    const hash = this._hash(key, this.keyMap.length)
    const location = this.keyMap[hash]
    if (!location) return undefined
    let found
    location.forEach(element => {
      if (element[0] === key) found = element[1]
    })
    return found
  }

  keys(){
    const returnArr = []
    this.keyMap.forEach(location=>{
      location.forEach(pair=>{
        returnArr.push(pair[0])
      })
    })
    return returnArr
  }

  values(){
    const returnArr = []
    this.keyMap.forEach(location=>{
      location.forEach(pair=>{
        returnArr.push(pair[1])
      })
    })
    return returnArr
  }

}

module.exports = HashTable
