const stringifyNumbers = require("./stringifyNumbers")

test("a", () => {

  const arg = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  }

  const result =
    {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66"
        }
      }
    }
  console.log(stringifyNumbers(arg))
  expect(stringifyNumbers(arg)).toStrictEqual(result)
})
