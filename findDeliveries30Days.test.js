const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000

const deliveriesBase = [
  {
    timestamp: Date.now(), // number
    place: {
      uuid: 'a123',
    },
    customer: {
      uuid: '1',
    },
  },
  // ... go on for many many entries (some non trivilia number)
]

const deliveriesOne = [
  {timestamp: Date.now(), place: {uuid: 'a123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 1000, place: {uuid: 'b123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 2000, place: {uuid: 'r123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 3000, place: {uuid: 'g123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 4000, place: {uuid: 'u123'}, customer: {uuid: '1ab'}}
]

const deliveriesTwo = [
  {timestamp: Date.now() - 3000, place: {uuid: 'a123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - 4000, place: {uuid: 'h123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - 1000, place: {uuid: 'r123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now(), place: {uuid: 'e123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - 2000, place: {uuid: 'w123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - 4000, place: {uuid: 'b123'}, customer: {uuid: '1ab'}}
]

const deliveriesThree = [
  {timestamp: Date.now() - THIRTY_DAYS - 3000, place: {uuid: 'u123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - THIRTY_DAYS - 1000, place: {uuid: 't123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - THIRTY_DAYS - 5000, place: {uuid: 'w123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - 5000, place: {uuid: 'q123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - THIRTY_DAYS - 2000, place: {uuid: 'm123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - 6000, place: {uuid: 'd123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now(), place: {uuid: 'b123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - 7000, place: {uuid: 'd123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS - 4000, place: {uuid: 'y123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - 8000, place: {uuid: 'i123'}, customer: {uuid: '3ef'}}
]

const deliveriesFour = [
  {timestamp: Date.now() - THIRTY_DAYS + 1000, place: {uuid: 'q123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS - 1000, place: {uuid: 'r123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 1000000000, place: {uuid: 'b123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS - 3000, place: {uuid: 'b123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - THIRTY_DAYS - 5000, place: {uuid: 'k123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - THIRTY_DAYS - 1000, place: {uuid: 'b123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS + 5000, place: {uuid: 'q123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now(), place: {uuid: 'b123'}, customer: {uuid: '3ef'}},
  {timestamp: Date.now() - THIRTY_DAYS + 2000, place: {uuid: 'y123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS, place: {uuid: 'b123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - 8000, place: {uuid: 'u123'}, customer: {uuid: '4gh'}},
  {timestamp: Date.now() - THIRTY_DAYS - 4000, place: {uuid: 'q123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 9000, place: {uuid: 'e123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - THIRTY_DAYS - 2000, place: {uuid: 't123'}, customer: {uuid: '2cd'}},
  {timestamp: Date.now() - THIRTY_DAYS - 2000, place: {uuid: 'j123'}, customer: {uuid: '1ab'}}
]

const deliveriesFive = [
  {timestamp: Date.now() - 1 * THIRTY_DAYS - 1000, place: {uuid: 'a123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 2 * THIRTY_DAYS - 2000, place: {uuid: 'b123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 3 * THIRTY_DAYS - 2000, place: {uuid: 'r123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 4 * THIRTY_DAYS - 3000, place: {uuid: 'g123'}, customer: {uuid: '1ab'}},
  {timestamp: Date.now() - 5 * THIRTY_DAYS - 4000, place: {uuid: 'u123'}, customer: {uuid: '1ab'}}
]

// console.log(`${findDeliveries30Days(deliveriesBase)}, EXPECTED => []`)
// console.log(`${findDeliveries30Days(deliveriesOne)}, EXPECTED => ['1ab']`)
// console.log(`${findDeliveries30Days(deliveriesTwo)}, EXPECTED => ['2cd']`)
// console.log(`${findDeliveries30Days(deliveriesThree)}, EXPECTED => ['3ef']`)
// console.log(`${findDeliveries30Days(deliveriesFour)}, EXPECTED => ['1ab', '2cd']`)
// console.log(`${findDeliveries30Days(deliveriesFive)}, EXPECTED => []`)

const findDeliveries30Days = require("./findDeliveries30Days")

describe('all', () => {
  test('a', () => {
    expect(findDeliveries30Days(deliveriesBase)).toStrictEqual([])
  })
  test('b', () => {
    expect(findDeliveries30Days(deliveriesOne)).toStrictEqual(['1ab'])
  })
  test('c', () => {
    expect(findDeliveries30Days(deliveriesTwo)).toStrictEqual(['2cd'])
  })
  test('d', () => {
    expect(findDeliveries30Days(deliveriesThree)).toStrictEqual(['3ef'])
  })
  test('e', () => {
    expect(findDeliveries30Days(deliveriesFour).sort()).toStrictEqual(['1ab', '2cd'])
  })
  test('f', () => {
    expect(findDeliveries30Days(deliveriesFive)).toStrictEqual([])
  })
})
