// these methods all don't change the origianl reference type array

const items = [
  { name: "A", price: 10 },
  { name: "B", price: 20 },
  { name: "C", price: 30 },
  { name: "D", price: 40 },
  { name: "E", price: 50 },
];

// FILTER: callback returns boolean
const filteredItems = items.filter((item) => {
  return item.price < 30;
});
console.log(filteredItems);
console.log(items);

// MAP: convert old array into new array, changing each one
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

// FIND: callback returns boolean, yields first entry which passes
const foundItem = items.find((item) => {
  return item.name === "B";
});
console.log(foundItem);

// FOREACH: does not return anything
items.forEach((item) => {
  console.log(item.name);
});

// SOME: returns boolean, callback returns boolean
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 40;
});
console.log(".some", hasInexpensiveItems);

// EVERY: some but for all instead of at least 1
const discount = items.every((item) => {
  return item.price <= 40;
});
console.log(discount);

// REDUCE: doing an operation on the arr and returning combination of them
// add property to cb (first parameter), 2nd param is start
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

const arr = [1, 2, 3, 4, 5];
// INCLUDES:
const includesTwo = arr.includes(2);
console.log(includesTwo);

// copy
const people = ["Andy", "Brian", "Cathy", "Marc"];
const shallowPeople = people;
people[0] = "Andrew";
console.log(shallowPeople); // Andrew

// STRUCTURED CLONE: truly deep copy
const objPeople = [{ name: "Andy" }, { name: "Brian" }];
const spreadObjPeople = [...objPeople];
const deepObjPeople = structuredClone(objPeople);
objPeople[0].name = "Andrew";
console.log(spreadObjPeople); // Andrew
console.log(deepObjPeople);

// WITH: changes idx to value, returns truly deep copy
const withObjPeople = objPeople.with(1, { name: "Kevin" });
console.log(objPeople);
console.log(withObjPeople);

// SORT, TO SORTED: not truly deep
const sortedPeople = objPeople.sort();
const newSortedPeople = objPeople.toSorted();
objPeople[1].name = "Third";
console.log(sortedPeople); // Third
console.log(newSortedPeople); // Third

// REVERSE, TO REVERSED: same as sort/toSorted
// reverse(), toReversed()

// SLICE: shallow copy between indicies
const objs = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];
const objsSlice = objs.slice(0, 2);
objsSlice[0] = { a: 0, b: 1 };
objsSlice[1].c = "three";
console.log(objsSlice);

// SPLICE: splice(start, deleteCount, item1, item2, itemN), edits in place
// TO SPLICED: shallow copy with depth
const objs2 = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];
const objsSlice2 = objs2.toSpliced(0, 0);
objs2[0] = { a: 0, b: 1 };
objs2[1].c = "three";
console.log(objsSlice2);
