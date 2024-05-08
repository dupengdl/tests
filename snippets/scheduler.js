class Scheduler {
  constructor(limit) {
    this.queue = []
    this.count = 0
    this.LIMIT = limit || 2
  }

  add(promiseCreator) {
    this.count++
    if (this.count <= this.LIMIT) {
      return promiseCreator().then(() => {
        this.count--
        this.queue.length && this.queue.shift()()
      })
    }
    return new Promise(resolve => {
      this.queue.push(resolve)
    }).then(() => {
      return promiseCreator().then(() => {
        this.count--
        this.queue.length && this.queue.shift()()
      })
    })
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

const run = () => {
  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')
}

run()
