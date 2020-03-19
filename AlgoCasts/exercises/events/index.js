// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  on(eventName, callback) {
    this[eventName] = this[eventName] ? [...this[eventName], callback] : [callback]
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this[eventName] && this[eventName].forEach(fn => fn())
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this[eventName] = null
  }
}

module.exports = Events
