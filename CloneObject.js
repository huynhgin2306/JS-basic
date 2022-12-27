
const obj = { one: 1, two: 2 };

const obj2 = obj;

console.log(
  obj2  // { one: 1, two: 2 };
)
//JSON
const obj = { one: 1, two: 2 };

const obj2 = JSON.parse(JSON.stringify(obj))

console.log(obj2); 
