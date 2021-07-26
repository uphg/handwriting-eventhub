class EventHub {
  constructor() {
    this._cache = {}
  }
  on(eventName, fn) {
    this._cache[eventName] = this._cache[eventName] || []
    this._cache[eventName].push(fn)
  }
  emit(eventName, data) {
    if(!this._cache[eventName]) { return false }
    this._cache[eventName].forEach(fn => fn(data))
  }
  off(eventName, fn) {
    const index = indexOf(this._cache[eventName], fn)
    if(index === -1) { return false }
    this._cache[eventName].splice(index, 1)
  }
}

function indexOf(array, item) {
  if(!array) { return -1 }
  let index = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i
      break
    }
  }
  return index
}

export default EventHub