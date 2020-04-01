const PriorityQueue = require("./PriorityQueue")

describe("PriorityQueue", () => {
  test('enqueue', () => {
    const q = new PriorityQueue()
    q.enqueue("medium", 1)
    q.enqueue("high", 0)
    q.enqueue("low", 2)
    q.enqueue("medium2", 1)
    q.enqueue("low2", 2)
    q.enqueue("high2", 0)
    expect(["high", "high2"]).toEqual(expect.arrayContaining([q.arr[0].value]))
    expect(["low", "low2"]).toEqual(expect.arrayContaining([q.arr[q.arr.length-1].value]))
  });

  test('dequeue', () => {
    const q = new PriorityQueue()
    q.enqueue("medium", 1)
    q.enqueue("high", 0)
    q.enqueue("low", 2)
    q.enqueue("medium2", 1)
    q.enqueue("low2", 2)
    q.enqueue("high2", 0)
    expect(["high", "high2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(["high", "high2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(["medium", "medium2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(["medium", "medium2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(["low", "low2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(["low", "low2"]).toEqual(expect.arrayContaining([q.dequeue().value]))
    expect(q.dequeue()).toBe(undefined)
  });
})

