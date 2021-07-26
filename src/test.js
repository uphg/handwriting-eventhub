import EventHub from './index.js'

const test1 = message => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object === true, 'eventHub 不可以创建对象')
  console.log(message)
}

const test2 = message => {
  const eventHub = new EventHub()
  let called = false
  eventHub.on('demo', (data) => {
    console.assert(data === '执行')
    called = true
  })
  eventHub.emit('demo', '执行')
  console.assert(called)
  console.log(message)
}

const test3 = message => {
  const eventHub = new EventHub()
  let called = false
  let fn = () => {
    called = true
  }
  eventHub.on('demo', fn)
  eventHub.off('demo', fn)
  eventHub.emit('demo')
  console.assert(called === false)
  console.log(message)
}


test1('EventHub 可以创建对象')
test2('EventHub 监听(on)之后可以正常触发(emit)监听函数')
test3('EventHub 清除事件功能正常')