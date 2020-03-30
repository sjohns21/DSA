const SinglyLinkedList = require("./SinglyLinkedList")

test("push", () => {
  const l = new SinglyLinkedList()
  expect(l.push("a")).toBe(l)
  expect(l.head.val).toBe("a")
  expect(l.tail.val).toBe("a")
  expect(l.length).toBe(1)
  expect(l.push("b")).toBe(l)
  expect(l.head.val).toBe("a")
  expect(l.tail.val).toBe("b")
  expect(l.length).toBe(2)
})

test("pop", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")

  expect(l.pop()).toBe("c")
  expect(l.tail.val).toBe("b")
  expect(l.tail.next).toBe(null)
  expect(l.length).toBe(2)

  expect(l.pop()).toBe("b")
  expect(l.length).toBe(1)

  expect(l.pop()).toBe("a")
  expect(l.length).toBe(0)

  expect(l.pop()).toBe(undefined)
})

test("shift", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")

  expect(l.shift()).toBe("a")
  expect(l.head.val).toBe("b")
  expect(l.length).toBe(2)

  expect(l.shift()).toBe("b")
  expect(l.head.val).toBe("c")
  expect(l.length).toBe(1)

  expect(l.shift()).toBe("c")
  expect(l.length).toBe(0)
  expect(l.tail).toBe(null)

  expect(l.shift()).toBe(undefined)
})

test("unshift", () => {
  const l = new SinglyLinkedList()
  l.unshift("c")
  expect(l.head.val).toBe("c")
  expect(l.head.next).toBe(null)
  expect(l.tail.val).toBe("c")
  expect(l.length).toBe(1)

  l.unshift("b")
  expect(l.head.val).toBe("b")
  expect(l.tail.val).toBe("c")
  expect(l.length).toBe(2)

  l.unshift("a")
  expect(l.head.val).toBe("a")
  expect(l.head.next.val).toBe("b")
  expect(l.length).toBe(3)
})

test("get", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")

  expect(l.get(-1)).toBe(null)
  expect(l.get(0).val).toBe("a")
  expect(l.get(1).val).toBe("b")
  expect(l.get(2).val).toBe("c")
  expect(l.get(3)).toBe(null)
})

test("set", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")

  expect(l.set(-1, "z")).toBe(false)
  expect(l.set(0, "d")).toBe(true)
  expect(l.head.val).toBe("d")
  expect(l.set(1, "e")).toBe(true)
  expect(l.get(1).val).toBe("e")
  expect(l.set(2, "f")).toBe(true)
  expect(l.tail.val).toBe("f")
  expect(l.set(3, "z")).toBe(false)
})

test("insert", () => {
  const l = new SinglyLinkedList()
  expect(l.insert(-1, "z")).toBe(false)
  expect(l.length).toBe(0)

  expect(l.insert(0, "a")).toBe(true)
  expect(l.head.val).toBe("a")
  expect(l.insert(1, "c")).toBe(true)
  expect(l.tail.val).toBe("c")
  expect(l.insert(1, "b")).toBe(true)
  expect(l.get(1).val).toBe("b")

  expect(l.insert(4, "z")).toBe(false)
  expect(l.length).toBe(3)
})

test("remove", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")

  expect(l.remove(-1)).toBe(undefined)

  expect(l.remove(1)).toBe("b")
  expect(l.get(1).val).toBe("c")

  expect(l.remove(1)).toBe("c")
  expect(l.length).toBe(1)

  expect(l.remove(0)).toBe("a")
  expect(l.head).toBe(null)

  expect(l.remove(1 )).toBe(undefined)
  expect(l.length).toBe(0)
})

test("reverse of length 4", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")
  l.push("d")
  l.reverse()

  expect(l.get(-1)).toBe(null)
  expect(l.get(0).val).toBe("d")
  expect(l.head.val).toBe("d")
  expect(l.get(1).val).toBe("c")
  expect(l.get(2).val).toBe("b")
  expect(l.get(3).val).toBe("a")
  expect(l.tail.val).toBe("a")
  expect(l.tail.next).toBe(null)
  expect(l.length).toBe(4)
  expect(l.get(4)).toBe(null)
})

test("reverse of length 3", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.push("c")
  l.reverse()

  expect(l.get(-1)).toBe(null)
  expect(l.get(0).val).toBe("c")
  expect(l.head.val).toBe("c")
  expect(l.get(1).val).toBe("b")
  expect(l.get(2).val).toBe("a")
  expect(l.tail.val).toBe("a")
  expect(l.get(3)).toBe(null)
})

test("reverse of length 2", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.push("b")
  l.reverse()

  expect(l.get(-1)).toBe(null)
  expect(l.get(0).val).toBe("b")
  expect(l.head.val).toBe("b")
  expect(l.get(1).val).toBe("a")
  expect(l.tail.val).toBe("a")
  expect(l.get(2)).toBe(null)
})
test("reverse of length 1", () => {
  const l = new SinglyLinkedList()
  l.push("a")
  l.reverse()

  expect(l.get(-1)).toBe(null)
  expect(l.get(0).val).toBe("a")
  expect(l.head.val).toBe("a")
  expect(l.tail.val).toBe("a")
  expect(l.get(2)).toBe(null)
})

