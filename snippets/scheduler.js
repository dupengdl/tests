// 队列实现请求并发数控制
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

// 递归实现请求并发数控制
const concurrencyRequest = (urls, maxNum) => {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let requestIndex = 0; // 当前请求的下标
    let completedCount = 0; // 当前请求完成的数量

    // 发送请求
    async function request() {
      // 如果请求下标达到请求队列的末尾，说明没有待处理的额请求了，结束递归
      if (requestIndex === urls.length) return;
      const i = requestIndex; // 保存序号，使result和urls相对应
      const url = urls[requestIndex];
      // 请求下标加1，进入请求处理阶段
      requestIndex++;
      try {
        console.log(url);
        // resp 加入到results
        results[i] = await fetch(url);
      } catch (err) {
        // err 加入到results
        results[i] = err;
      } finally {
        completedCount++;
        // 判断是否所有的请求都已完成
        if (completedCount === urls.length) {
          console.log('完成了');
          resolve(results);
        }
        // 当前请求结束后（不论成功或失败）发起下一个请求
        request();
      }
    }

    // maxNum和urls.length取最小进行调用
    const times = Math.min(maxNum, urls.length);
    for(let i = 0; i < times; i++) {
      request();
    }
  })
}
