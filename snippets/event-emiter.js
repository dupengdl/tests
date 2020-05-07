class EventEmit {
  construct() {
    this.eventMap = {}
  }
  on(name, cb) {
    if (!this.eventMap[name]) {
      this.eventMap[name] = [cb]
    } else {
      this.eventMap[name].push(cb)
    }
  }
  off(name, cb) {
    if (this.eventMap[name]) {
      const index = this.eventMap[name].indexOf(cb)
      this.eventMap[name].splice(index, 1)
    }
  }
  trigger(name, ...args) {
    if (this.eventMap[name] && this.eventMap[name].length) {
      this.eventMap[name].forEach(cb => {
        cb(...args)
      })
    }
  }
  once(name, fn) {
    if (!this.eventMap[name]) {
      this.on(name, (...args) => {
        fn(...args)
        this.off(name, fn)
      })
    }
  }
}
