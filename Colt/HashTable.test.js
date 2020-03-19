const HashTable = require("./HashTable")

let h
beforeEach(() => {
  h = new HashTable(4)
  h.set("a", 1)
  h.set("b", 2)
  h.set("d", 4)
  h.set("e", 5)
})

test('set, get', () => {
  h.set("a", 1)
  expect(h.get("a")).toEqual(1)
  h.set("b", 2)
  expect(h.get("b")).toBe(2)
  h.set("d", 4)
  expect(h.get("d")).toBe(4)
  h.set("e", 5)
  expect(h.get("e")).toBe(5)
  expect(h.get("f")).toBe(undefined)
})

test('keys', () => {
  const expected = ["a", "b", 'd', 'e']
  const keys = h.keys()
  expect(keys).toEqual(
    expect.arrayContaining(expected),
  )
})

test('values', () => {
  const expected = [1, 2, 4, 5]
  const values = h.values()
  expect(values).toEqual(
    expect.arrayContaining(expected),
  )
})
