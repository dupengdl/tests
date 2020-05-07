function debounce(fn, time) {
  let timer
  return function() {
    let ctx = this
    let args = arguments
    if (timer)
      clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(ctx, args)
    }, time)
  }
}

function throttle(fn, time) {
  let timer
  return function() {
    let ctx = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(function() {
        timer = null
        fn.apply(ctx, args)
      }, time)
    }
  }
}

function shuffle(arr) {
  let m = arr.length
  while (m > 1) {
    const index = parseInt(Math.random() * (m--));
    [arr[m],arr[index]] = [arr[index], arr[m]]
  }
  return arr
}

function newObj(fn, ...args) {
  let obj = {}
  obj.__proto__ = fn.prototype
  fn.apply(obj, args)
  return obj
}

function sleep(time) {
  return new Promise(resolve=>{
      setTimeout(resolve, time)
    }
  )
}

function curry(fn) {
  return function next(...args) {
    if (fn.length === args.length) {
      fn.apply(null, args)
    } else {
      return function(..._args) {
        return next(...args, ..._args)
      }
    }
  }
}

function all(arr) {
  if (arr.length === 0)return Promise.resolve([])
  return new Promise((resolve, reject)=>{
    const res = []
    let count = 0
    arr.forEach((p, index)=>{
      p.then(data=>{
        count++
        res[index] = data
        if (count === arr.length) {
          resolve(res)
        }
      }).catch(e => {
        reject(e)
      })
    })
    return res
  })
}

function quicksort(arr) {
  function sort(arr, begin, end){
    if (begin >= end)return;
    let left = begin
    let right = end
    while(left < right) {
      while(arr[right]>=arr[begin] && left < right){right--}
      while(arr[left]<=arr[begin] && left < right){left++}
      [arr[left], arr[right]] =[arr[right], arr[left]]
    }
    [arr[begin], arr[right]] =[arr[right], arr[begin]]
    sort(arr, begin, right-1)
    sort(arr, right+1, end)
  }
  sort(arr, 0, arr.length-1)
  return arr
}

function mergesort(arr) {
  function merge(arr1, arr2) {
    let res = []
    while(arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        res.push(arr1.shift())
      } else {
        res.push(arr2.shift())
      }
    }
    while(arr1.length){res.push(arr1.shift())}
    while(arr2.length){res.push(arr2.shift())}
    return res
  }
  function sort(arr) {
    if(arr.length<2)return arr
    let mid = arr.length >> 1
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(sort(left), sort(right))
  }
  return sort(arr)
}

function sumbig(a, b) {
  let res = ''
  let temp = 0
  a = a.split('')
  b = b.split('')
  while(a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop()
    res = (temp % 10) + res
    temp = temp > 9
  }
  return res.replace(/^0+/, '')
}

function thousands(num) {
  let arr = num.toString().split('').reverse()
  let res = []
  for(let i = 0;i<arr.length;i++) {
    res.push(arr[i])
    if ((i+1)%3 === 0 && i !== arr.length-1)res.push(',')
  }
  return res.reverse().join('')
}
