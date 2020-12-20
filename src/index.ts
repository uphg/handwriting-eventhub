class EventHub {
  private cache = {}
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit(eventName, data?) {
    if(!this.cache[eventName]) { return false }
    this.cache[eventName].forEach(fn => fn(data))
  }
  off(eventName, fn) {
    const index = indexOf(this.cache[eventName], fn)
    if(index === -1) { return false }
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub

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