// javascript is pass by value by default for primitives
// it is pass by reference for objects (variable value is mem address)

// tricky example:
const c = [1, 2]
c.push(3) // this is allowed and works because const is actually referering to
// the memory address that c is holding

/**
 * TYPE CONVERSION AND COMPARISON
 *
 * == casts to first (I think) operand's type before comparing,
 * useful if checking if null == undefined (object)
 *
 * otherwise use === which does not convert type
 */

// cam use spread operator to copy reference type by value
// (array, object, function)

const d = [...c]
d.push(4) // only pushes to the object pointed to by d

const obj1 = { name: 'taaco' }
const obj2 = { ...obj1 }
