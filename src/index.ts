class eventHub {
  data = {}
  on(eventName, fn) {
    this.data[eventName] = this.data[eventName] || []
    this.data[eventName].push(fn)
  }
  off(eventName, fn) {
    const index = this.data[eventName].indexOf()
    if(index === -1) { return false }
    this.data[eventName].splice(index, 1)
  }
  emit(eventName, data) {
    if(!this.data[eventName]) { return false }
    this.data[eventName].forEach(fn => fn(data))
  }
}
console.log()

export default eventHub