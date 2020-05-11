const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

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
];

// Write a function that takes a list of deliveries and returns the customer
// UUIDs for customers who have had 5 or more deliveries within any 30 day period
function findDeliveries30Days(deliveries) {

  const times = {} // uuid: timestamp[]

  deliveries.forEach((delivery)=>{
    const uuid = delivery.customer.uuid
    const timestamp = delivery.timestamp

    if(times[uuid]){
      times[uuid].push(timestamp)
    } else {
      times[uuid] = [timestamp]
    }

  })

  // console.log('times', times)

  const valuedCustomers = []
  Object.keys(times).forEach(uuid => {
    const values = times[uuid]
    values.forEach(value=>{
      // console.log('value',value)
      const thirtyAhead = value + THIRTY_DAYS
      let count = 0
      values.forEach(otherValue => {

        if(otherValue >= value && otherValue < thirtyAhead){
          count++
        }
      })
      if(count >= 5) {
        valuedCustomers.push(uuid)
      }
    })
  })

  // console.log('valuedCustomers', valuedCustomers)

  //remove duplicates
  const final = []
  const customerAdded = {}
  valuedCustomers.forEach(uuid=>{
    if(!customerAdded[uuid]){
      customerAdded[uuid] = true
      final.push(uuid)
    }
  })

  return final
}


const deliveriesOne = [
  { timestamp: Date.now()       , place: { uuid: 'a123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 1000, place: { uuid: 'b123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 2000, place: { uuid: 'r123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 3000, place: { uuid: 'g123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 4000, place: { uuid: 'u123'}, customer: {uuid: '1ab'} }
];

const deliveriesTwo = [
  { timestamp: Date.now() - 3000, place: { uuid: 'a123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - 4000, place: { uuid: 'h123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - 1000, place: { uuid: 'r123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now()       , place: { uuid: 'e123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - 2000, place: { uuid: 'w123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - 4000, place: { uuid: 'b123'}, customer: {uuid: '1ab'} }
];

const deliveriesThree = [
  { timestamp: Date.now() - THIRTY_DAYS - 3000 , place: { uuid: 'u123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - THIRTY_DAYS - 1000 , place: { uuid: 't123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - THIRTY_DAYS - 5000 , place: { uuid: 'w123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - 5000               , place: { uuid: 'q123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - THIRTY_DAYS - 2000 , place: { uuid: 'm123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - 6000               , place: { uuid: 'd123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now()                      , place: { uuid: 'b123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - 7000               , place: { uuid: 'd123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS - 4000 , place: { uuid: 'y123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - 8000               , place: { uuid: 'i123'}, customer: {uuid: '3ef'} }
];

const deliveriesFour = [
  { timestamp: Date.now() - THIRTY_DAYS + 1000 , place: { uuid: 'q123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS - 1000 , place: { uuid: 'r123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 1000000000         , place: { uuid: 'b123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS - 3000 , place: { uuid: 'b123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - THIRTY_DAYS - 5000 , place: { uuid: 'k123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - THIRTY_DAYS - 1000 , place: { uuid: 'b123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS + 5000 , place: { uuid: 'q123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now()                      , place: { uuid: 'b123'}, customer: {uuid: '3ef'} },
  { timestamp: Date.now() - THIRTY_DAYS + 2000 , place: { uuid: 'y123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS        , place: { uuid: 'b123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - 8000               , place: { uuid: 'u123'}, customer: {uuid: '4gh'} },
  { timestamp: Date.now() - THIRTY_DAYS - 4000 , place: { uuid: 'q123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 9000               , place: { uuid: 'e123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - THIRTY_DAYS - 2000 , place: { uuid: 't123'}, customer: {uuid: '2cd'} },
  { timestamp: Date.now() - THIRTY_DAYS - 2000 , place: { uuid: 'j123'}, customer: {uuid: '1ab'} }
];

const deliveriesFive = [
  { timestamp: Date.now() - 1* THIRTY_DAYS - 1000, place: { uuid: 'a123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 2* THIRTY_DAYS - 2000, place: { uuid: 'b123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 3* THIRTY_DAYS - 2000, place: { uuid: 'r123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 4* THIRTY_DAYS - 3000, place: { uuid: 'g123'}, customer: {uuid: '1ab'} },
  { timestamp: Date.now() - 5* THIRTY_DAYS - 4000, place: { uuid: 'u123'}, customer: {uuid: '1ab'} }
];


console.log(`${findDeliveries30Days(deliveriesBase)}, EXPECTED => []`)
console.log(`${findDeliveries30Days(deliveriesOne)}, EXPECTED => ['1ab']`)
console.log(`${findDeliveries30Days(deliveriesTwo)}, EXPECTED => ['2cd']`)
console.log(`${findDeliveries30Days(deliveriesThree)}, EXPECTED => ['3ef']`)
console.log(`${findDeliveries30Days(deliveriesFour)}, EXPECTED => ['1ab', '2cd']`)
console.log(`${findDeliveries30Days(deliveriesFive)}, EXPECTED => []`)
