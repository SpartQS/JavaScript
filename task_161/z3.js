let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};


let newObj = {};
for (let key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}
