// object in object we can store data in the fonm of key and value pair.
// syntax  is
var obj={
         name:"vitthal",
         age:23,
         ele : [10,20,30],
         info: ()=> {
             return this.name+""+this.age;
         }
};
console.log(obj);


// another way to create object
let obj1=new Object();

obj1.name="vithal";
obj1.age=23;

console.log(obj1);

// wayto create arrays
var fruites= new Array('apple','banana');
console.log(fruites);

// another way to create array object
var lib=[
         {name:'vittal',
          age:23,
          gener:"male"  
         },
         {
           name:'king',
           age:24,
           gender:'male'
         }
];
console.log(lib);

// loops in javascript
// for loop with example
let arr=[1,2,3,5,6];
let res=[];

let ind=0
for(let i=0;i<arr.length;i++) {
    if(arr[i]%2===0){
        // console.log(arr[i]);
        // let v=arr[i];
        res[ind++]=arr[i]
        // res.push(v);
    }
}
console.log(res);

// for-each loop with example it takes argu/param as callback funtion and callback funtion has treee argu num,index,array

let example=[10,20,30,40,50];

example.forEach( (ele,ind)=>console.log(ele,ind)
     
);

let one=['vithal','rao','king'];

one.forEach( ele=>console.log(ele));

let two={
          name:"vishal",
          age:24,
          gender:"male"
};
// console.log(two);
console.log("**********");

// for in loop
for (const key in two) {
    console.log(key);
    console.log(two[key]);   
}
// for of loop
const people= [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
];
let target=1;
let cIndex=0;
let notFound=0;
for (const ele of people) {
    // console.log(ele);
    // console.log((ele[2]));
    // console.log(`${ele.name} is ${ele.age}`);
    // console.log(ind);
    if(cIndex===target){
        console.log(`${ele.name} and ${ele.age}`);
        notFound++;
        break;
    }
    // if(notFound===0){
    //     console.log("not found");  
    // }
    cIndex++;
}

// functions in javascript
// named function

function onee(value) {
    // console.log(value);
    return value;
}
console.log(
  onee(10));

//   anonymous function
const twoo=function () {
    console.log("it is anonymous function");  
}
twoo();

// arrow function

let arro= (a,b)=> {
    let c=a+b;
    return (c)
};
console.log(arro(10,20));


const kaj= a =>console.log('short of arrow function '+a);
    
kaj(10);


