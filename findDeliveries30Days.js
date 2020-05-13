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
// Write a function that takes a list of deliveries and returns the customer
// UUIDs for customers who have had 5 or more deliveries within any 30 day period
function findDeliveries30Days(deliveries) {

  const customers = {} // uuid: timestamp[]

  deliveries.forEach((delivery) => {
    const {uuid: customer} = delivery.customer
    const {timestamp} = delivery

    if (customers[customer]) {
      customers[customer].push(timestamp)
    } else {
      customers[customer] = [timestamp]
    }

  })

  const result = {}
  for (const [customer, times] of Object.entries(customers)) {
    if (times.length < 5) continue
    times.sort()

    let i = 0
    let j = 4
    while (j < times.length) {
      if (times[j] - times[i] < THIRTY_DAYS) {
        result[customer] = true
        break
      } else {
        i++
        j++
      }
    }

  }

  return Object.keys(result)
}


module.exports = findDeliveries30Days
