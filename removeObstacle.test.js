const removeObstacle = require("./removeObstacle")

describe("removeObstacle", () => {
  test("a", () => {
    expect(typeof removeObstacle).toBe('function')
  })

  test("b", () => {
    expect(removeObstacle(3, 3,
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 9, 1]
      ]
    )).toStrictEqual(3)
  })
  test("c", () => {
    expect(removeObstacle(3, 3,
      [
        [1, 1, 1],
        [1, 0, 1],
        [0, 9, 1]
      ]
    )).toStrictEqual(5)
  })
  test("d", () => {
    expect(removeObstacle(3, 3,
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 9, 1]
      ]
    )).toStrictEqual(3)
  })
  test("e", () => {
    expect(removeObstacle(3, 4,
      [
        [1, 1, 1, 1],
        [0, 0, 1, 1],
        [1, 9, 1, 1]
      ]
    )).toStrictEqual(5)
  })
  test("f", () => {
    expect(removeObstacle(3, 4,
      [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [1, 9, 1, 1]
      ]
    )).toStrictEqual(7)
  })
  test("g", () => {
    expect(removeObstacle(4, 4,
      [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [1, 9, 1, 1],
        [1, 1, 1, 1]
      ]
    )).toStrictEqual(7)
  })
  test("h", () => {
    expect(removeObstacle(4, 4,
      [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [1, 9, 0, 1],
        [1, 1, 1, 1]
      ]
    )).toStrictEqual(9)
  })
  test("i", () => {
    expect(removeObstacle(4, 4,
      [
        [1, 1, 1, 1],
        [0, 1, 0, 1],
        [1, 9, 0, 1],
        [1, 1, 1, 1]
      ]
    )).toStrictEqual(3)
  })
  test("j", () => {
    expect(removeObstacle(4, 4,
      [
        [1, 1, 1, 1],
        [1, 0, 9, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1]
      ]
    )).toStrictEqual(3)
  })
})

