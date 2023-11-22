const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]
// const b = alphabet[1]

const [a, b, c, , e, ...rest] = alphabet

// don't need to give names to unused destructured vars
const [, , C] = alphabet
console.log(C)

const newArray = [...alphabet, ...numbers]
// same thing as alphabet.concat(numbers)

console.log(a, b, c, e, rest)
console.log(newArray)

const sumAndMultiply = (a, b) => {
  return [a + b, a * b]
}

const array = sumAndMultiply(2, 3)
const [sum, product, quotient = 'no division default'] = sumAndMultiply(2, 3)
console.log(array)
console.log(sum, product, quotient)

/* OBJECTS: where it really gets powerful *************************************/

const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'Somewhere',
    state: 'One of them',
  },
}

const personTwo = {
  name: 'Sally',
  age: 32,
  // address: {
  //   city: 'Somewhere else',
  //   state: 'Another one of them',
  // },
}

// instead of order, the variable name needs to match no the order
// can add an alias like firstName
// alias is a reference
// as is the same as using a colon
const { name: firstName, age, favoriteFood = 'rice default' } = personTwo
console.log(firstName, age, favoriteFood)

const {
  name,
  address: { city },
  ...other
} = personOne
console.log(name, other)
console.log(city)

// remove key from object
const dict = { a: 'a', b: 'b' }
const { a: _, ...newDict } = dict
console.log(newDict)
console.log(_)

// combine them:
// personTwo properties overwrite personOne, and add any missing ones
const personThree = { ...personOne, ...personTwo }
console.log(personThree)

const printUser = (user) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`)
}

printUser(personOne)

const printUser2 = ({ name, age, favoriteFood = 'Watermelon' }) => {
  console.log(`Name: ${name}, Age: ${age}, Food: ${favoriteFood}`)
}

printUser2(personOne)
