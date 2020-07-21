//const cannot be re-assigned
const person = {
    age:27
}

//Valid
// console.log(person.age)
//Invalid
// person = {}
let isRaining = {
  rain: `It has been ${person.age} years since I saw my mom.`,
  age:24*7,
  name:'Avenger',
  car:'Porsche'
}
// console.log(`Wow ${isRaining.rain} I'm ${isRaining.age} years old now with a ${isRaining.car} and they call me ${isRaining.name}`)


isRaining.name = 'juggle'

// console.log(isRaining.name)