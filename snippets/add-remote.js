function addRemote(a, b) {
  return new Promise(resolve => {
      // console.log(a, b)
      setTimeout(() => resolve(a + b), 500)
    },
  )
}

class Calculator {
  async add(...inputs) {
    const len = inputs.length
    if (len === 0) {
      return Promise.resolve(0)
    } else if (len === 1) {
      return Promise.resolve(inputs[0])
    } else if (len === 2) {
      return addRemote(...inputs)
    } else {
      const grouped = []
      for (let i = 0; i < inputs.length; i += 2) {
        grouped.push(typeof inputs[i + 1] !== 'undefined' ? [inputs[i], inputs[i + 1]] : [inputs[i]])
      }
      const promises = Promise.all(grouped.map(arr => this.add(...arr)))
      return promises.then((res) => this.add(...res))
    }
  }
}

const calc = new Calculator()
calc.add(...('2'.repeat(11).split('').map(n => Number(n)))).then(res => console.log(res))
