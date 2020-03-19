class LRUCache {
  constructor(capacity){
    this.capacity = capacity
    this.data = {}
    this.got = {}
    this.counter = 0
  }
  get(key){
    this.got[key] = this.counter++
    return this.data[key]
  }
  put(key, value){
    this.data[key] = value
    this.got[key] = this.counter++
    if(Object.keys(this.data).length > this.capacity){
      let min = Infinity;
      let remove
      for(let [key, value] of Object.entries(this.got)){
        if(value < min){
          min = value
          remove = key
        }
      }
      this.data[remove] = null
    }

  }
}
test('a', () => {
  const cache = new LRUCache(2)
  cache.put(1,"1")
  cache.put(2,"2")
  expect(cache.get(1)).toBe("1")
  cache.put(3,"3")
  expect(cache.get(2)).toBe(null)
  cache.put(4,"4")
  expect(cache.get(1)).toBe(null)
  expect(cache.get(3)).toBe("3")
  expect(cache.get(4)).toBe("4")
  console.log(cache)
});
