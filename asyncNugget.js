// async must be in front of the fuction for you to use await
// await waits for promise to be settled
// async functions *always* return a promise

const example = async () => {
    return 'hello there'
}

const example2 = async () => {
    return 'hello there 2'
}

console.log('promise', example());
// invoking function returns promsie, need to await to get returned value

async function someFunc() {
    const result = await example()
    console.log(await example2())
    console.log(result)
    console.log("after");
}

someFunc()

console.log('actually not last')
 
/* function notAsync() {
    const result = await example()
} */
// error cuz needs to be an async function to await asynch function call