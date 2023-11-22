const foo = (string) => {
  return `Hello ${string}`
}

console.log(foo('Brian'))
console.log(foo`Brian`)

// unclear how to have multiple parameters
// const bar = (first, second) => {
//   return `Hello ${first} ${second}`
// }

// console.log(bar('Brian', 'Travis'))
// // console.log(bar`Brian`)  // doesn't work

// const spam = (strings) => {
//   return `Hello ${strings[0]} ${strings[1]}`
// }

// // console.log(bar('Brian', 'Travis'))
// console.log(spam`${'Brian'}${'Travis'}`) // doesn't work
