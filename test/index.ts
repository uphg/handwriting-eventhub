import EventHub from '../src/index'

const eventHub = new EventHub()

eventHub.on('xxx', (data) => {
  console.log(data)
})

eventHub.emit('xxx', '我已被触发')