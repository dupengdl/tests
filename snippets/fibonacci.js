function fib(n) {
  if (n === 1) return 1
  if (n === 2) return 1
  return fib(n-1) + fib(n-2)
}

console.time('fib time')
console.log(fib(40))
console.timeEnd('fib time')

function fibIte(n) {
  if (n === 1) return 1
  if (n === 2) return 1
  let res = 0
  let prev1 = 1, prev2 = 1
  for (let i=3;i<=n;i++) {
    res = prev1 + prev2
    prev1 = prev2
    prev2 = res
  }
  return res
}

console.time('fib ite time')
console.log(fibIte(40))
console.timeEnd('fib ite time')

var cacheObj = {1:1, 2:1}
function fibCache(n) {
  if (!cacheObj[n-1]) {
    cacheObj[n-1] = fibCache(n-1)
  }
  if (!cacheObj[n-2]) {
    cacheObj[n-2] = fibCache(n-2)
  }
  return cacheObj[n-1] + cacheObj[n-2]
}

console.time('fib cache time')
console.log(fibCache(40))
console.timeEnd('fib cache time')

function fibDP(n) {
  const dp=[]
  dp[0]=0;
  dp[1]=dp[2]=1;
  for(let i=3;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
  }
  return dp[n]
}

console.time('fib dp time')
console.log(fibDP(40))
console.timeEnd('fib dp time')

function fibTail(n, first, second) {
  if (n === 1) return first
  if (n === 2) return second
  return fibTail(n-1, second, first+second)
}

console.time('fib tail time')
console.log(fibTail(40, 1, 1))
console.timeEnd('fib tail time')
