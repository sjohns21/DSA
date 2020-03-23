const collectStrings = require("./collectStrings")

test("a",()=>{
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
  }
  expect(collectStrings(obj)).toStrictEqual(["foo", "bar", "baz"])
})
