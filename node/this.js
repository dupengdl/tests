let name = 'x'
const people = {
  name: 'y',
  setName: (name) => {
    console.log(this)
    this.name = name
    return () => {
      return this.name
    }
  }
}
let getName = people.setName(name)

console.log(people.name)
console.log(getName())
