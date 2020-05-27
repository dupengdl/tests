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

function fibTail(n, first, second) {
  if (n === 1) return first
  if (n === 2) return second
  return fibTail(n-1, second, first+second)
}

console.time('fib tail time')
console.log(fibTail(40, 1, 1))
console.timeEnd('fib tail time')
