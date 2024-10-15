// object methods


// example

let obj={
         name:"vittahl",
         age:24,
         gen:"male",
         rel:"hindu"
};
// to delete key
delete obj.age
// to update
obj.name="vishal"

console.log(obj);

// Object.keys(object)
//  - Params: object (the object to extract keys from).
//  - Returns: An array of the object's keys.

let keys=(Object.keys(obj));
console.log(keys);

// Object.values(object)
//    - Params: object (the object to extract values from).
//    - Returns: An array of the object's values.
console.log(Object.values(obj));

// Object.entries(object)
//    - Params: object (the object to extract key-value pairs from).
//    - Returns: An array of key-value pairs.
const res=(Object.entries(obj));
// console.log(res[2]);
console.log(obj);



// Params: assign()
//      - target (the target object).
//      - sources (one or more source objects).
//    - Returns: The modified target object.

// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     t: {
//       w: 3,
//       x: 8,
//       y: 8,
//       z: {
//         p: 7,
//         q: 9,
//          },
//       },
//   };
// assign method example one
let assign = Object.assign(obj, { z: 10 });
console.log(obj);

console.log(assign);

// example2 merging two objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const merged = Object.assign({}, object1, object2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }

// example 3 shallowcoping an obj
const original = { x: 1, y: 2 };
const copy = Object.assign({}, original);
console.log(copy); // Output: { x: 1, y: 2 }
// Modifying the copy does not affect the original
copy.x = 3;
console.log(original); // Output: { x: 1, y: 2 }
console.log(copy);     // Output: { x: 3, y: 2 }

// another example
const target = { a: 1 };
const source = { b: 2, c: 3 };
const re=Object.assign(target, source);
console.log(re);


// Object.seal(object)
//    - Params: object (the object to seal).
//    - Returns: The sealed object.
// used to modify the  properties but can't add new key and value after sealed it once
const tar= {
            a:1,
            b:2,
            c:3
};
// Object.seal(tar);
// console.log(tar);
// // tar.a=5;
// // console.log(tar); cannot add new key and values
// tar.d=6;
// console.log(tar);

// freeze:(params(object)) by using this method we cannot add new key&value and also cannot modify existing key and value
// Returns: The frozen object.
Object.freeze(tar);
// tar.a=5; cannot modify existing value
// tar.d=10; cannot add new value
console.log(tar);
// console.log(Object.isFrozen(tar));isFrozen used to check wether the obj is frozen or not returns boolean value
// params (object)


// Key Differences from Strict Equality (===):
// NaN Handling: Object.is(NaN, NaN) returns true,      while NaN === NaN returns false.
// Zero Handling: Object.is(-0, +0) returns false,      while -0 === +0 returns true.
//  Object.is(value1, value2)
//     - Params:
//       - value1 (the first value).
//       - value2 (the second value).
//     - Returns: true if the values are the same, otherwise false.
console.log(Object.is(42,42));
console.log((Object.is(true,false)));
console.log((Object.is(0,-0)));









  



