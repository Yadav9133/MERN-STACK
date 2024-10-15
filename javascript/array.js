// array methods

// push: method is used to add element into array at the end of an array
// params will be element,,elementN
// will modify new array and add the new length I can add any no of elements

let arr=[10,20,3,0,40];

console.log(arr);

arr.push(10,20);
console.log(arr);

// pop: method used to remove the array element from last element and original array will be modified
// params none last element
// original array will be modified
arr.pop();
console.log(arr);

// shift: it is one of the array method used to remove the element from 1st postion of the array
// params none
// original array will be modified.
arr.shift();
console.log(arr);

// un-shift: used to add the element from the first postion of the array.
// param will be elemnts,..elementN
// original array will be modified.
arr.unshift(10,20,30);
console.log(arr);

// concat: used to add more than one element/array
// returns new array
// original array will not modified

let one=[1,2,3,4];
let res=arr.concat(one);
console.log(one);
console.log(arr);
console.log(res);

// slice: used to extract the part of the original array, Will not modified
// new array will be produce
// params start-ind(optional) by default will start extract from 0-ind id we not provide,end-ind(optional) by defualt will consider end of the element

let newArr=one.slice(1,3);
console.log(newArr);

// using negative indices
let newAr=one.slice(-3);
console.log(newAr);

// splice: usec to add or remove an element from original array and original array will be modified
// params startInd-start changing the array, deleteCount-no of elements to remove from the array if we provide 0 no ele will be removed
//  items(optional)The elements to add to the array starting at startIndex. If no elements are specified, splice() only removes elements.
// to remove ele
one.splice(1,2);
console.log(one);
// to add ele
let three=[1,2,3,4,5,6];
console.log(three);

three.splice(2,0,10,20,30);
console.log(three);

// forEach: used to iterate an array
// params accept call-back function as an argu in that we have3(element,index(optional),array(optional)),executed for each elemen.
// returns un-defined, cannot be terminated before all elements have been processed
// original array will remain same, It does not return a new arrconst fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Using forEach to log each fruit
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});
// will not support break statm,ignores emty element

// includes: used to check whether the array of specified element is prasent or not returns boolean value(true or false)
// original array will not modified
// params(element,startIndex(optional)by defualt start from 0 index)
//  true if the value is found, otherwise false.

console.log(three.includes(0,0));

// reverse: it used to reverse the array
// Params: None.
// Returns: The reversed array. and modified the original array

console.log(three.reverse());

console.log(three);
 
// indexOf: this method used to return the index of the specified element in given array
// params (element to search for,startInd(optional)start searching from by defualt 0)
// returns indexValue if occurence of ele is prasent otherwise returns -1.

console.log(three.indexOf(0));


// sort(): this method is used to sort the array. asc/desc by defualt asc
// params([comparisonFunction])
// returns new array
let four=[1,3,8,4,5]
console.log((four.sort()));

// another example if we have multiple digits
// in ascending order
 three.sort((a,b) => a-b);
 console.log(three);
//  in descending order
three.sort((a,b) => b-a);
console.log(three);

// flat: this method used to flatter the array in depth
//  params(depth(optional)default value is 1)
//  deep a nested array should be flattened
const arrOne=[1,2,[3,4]];
console.log(arrOne.flat());

const arrTwo=[1,2,3,[4,5,[6]]];
console.log(arrTwo.flat(2));

const arrThree=[1,2,[3,4,[5,6,[7]]]];

const rs=(arrThree.flat(Infinity));
console.log(rs);
console.log(arrThree);

// join:method does not modify the original array; it returns a new string that joins the array elements.
// Params: separator (optional, string to separate each element, default is a comma).
let fourr=[1,3,8,4,5]
let rss= (fourr.join(''));
console.log(rss);
console.log(fourr);
console.log(typeof (rss));

//find: find(callback(element, index(optional), array(optional)))
//- Params: A callback function that returns true for the desired element.
//- Returns: The first element that satisfies the condition or undefined.
// The find() method stops iterating once it finds the first matching element.
// It returns undefined if no element satisfies the condition.
// It does not modify the original array.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 200);
console.log(found); // Output: undefined

const number = [5, 12, 8, 130, 44];
const foun = numbers.find(element => element > 10);
console.log(foun); // Output: 12

// map: params(callback(element,index,array)): this method is used to execute each element or to modify/iterate/manipulate an array
// original array will not modify but returns new array
const numss=[1,2,3,4,5];
const resss=numss.map(num => num*2);
console.log(numss);
console.log(resss);

// filter(callback(element, index, array))
// used to filter an array based on condition and returns new array
// original array will not modify but returns new array only the elements that match the condition.
// array.filter(callback(element, index, array), thisArg), If no elements pass the test, it returns an empty array.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = num.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
console.log(num);

const userrs = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 18 },
    { id: 4, name: 'Charlie', age: 22 }
  ];
  const adults = userrs.filter(user => user.age >= 21);
  console.log(adults);
  // Output: [{ id: 2, name: 'Alice', age: 30 }, { id: 4, name: 'Charlie', age: 22 }]
  

//    reduce(callback(accumulator, element, index, array), initialValue)
//    - Params:  used to find the sum/product  of element  accumulating data based on some logic
//    - callback function executed on each element.
//    - initialValue (optional, initial value for the accumulator).
//    - Returns: The single accumulated value.
//    accumulator:Accumulates the return values of the callback. It's the result of the previous iteration (or the initial value on the first iteration).
//    initialValue (optional): The initial value to start the accumulation with. If provided, it becomes the first accumulator value. 
//    If not provided, the first element of the array is used as the initial value
const vitu=[1,2,3,4,5,6,7]
const sum=vitu.reduce((acc,currentEle) => acc+currentEle,2);
console.log(sum);

// some:
// Key Points(callback(element, index, array))):
// some() returns true if at least one element passes the test; otherwise, it returns false.
// It stops checking as soon as it finds the first element that satisfies the condition (short-circuits).
// It does not modify the original array.
// If the array is empty, some() always returns false.

// toString method
// toString() method converts the elements of the array to strings and joins them with commas. 
// Notice that the null and undefined values are represented as empty strings in the output.
const mixedArray = [1, 'hello', true, null, undefined];
const result = mixedArray.toString();
console.log(result); // Output: "1,hello,true,,"

const fruitss = ['apple', 'banana', 'mango'];
console.log(fruitss);

const resultt = fruitss.toString();
console.log(resultt); // Output: "apple,banana,mango"


















   














