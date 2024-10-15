// Write a function to remove duplicate values from an array.
let arr = [1, 2, 3, 2, 4, 1]
// console.log(arr);
// console.log(arr.indexOf(4));
//  by using filter method 
function remove_dup() {
let res = arr.filter((ele, ind) => {
    return arr.indexOf(ele) === ind
});
console.log(res);
}
remove_dup();


// Check if two given strings are anagrams (contain the same characters in a different order).
function anagram(str, str1) {
    str = str.toLowerCase();
    str = str.toLowerCase();

    if (str.length !== str1.length) {
        console.log("is not a anagram");
    } else {
        let strArr = str.split("");
        let str1Arr = str.split("");
        str = strArr.sort();
        str1 = strArr.sort();
        if (str === str1) {
            console.log("it is a anagram");
        }
    }
};
anagram('enlist', 'listen')


// Generate the first `n` numbers of the Fibonacci sequence.
function fibo(n) {
    let a = 0;
    let b = 1;
    // let n=100;
    console.log(a);
    console.log(b);
    c = a + b;
    while (c <= n) {
        console.log(c);
        a = b;
        b = c;
        c = a + b;
    }
}
fibo(100)

// Find and return the largest number in an array.
let array=[2,4,57,6,9];
let maxNum=0;
array.forEach(ele => {
      if(ele>maxNum){
        maxNum=ele
      } 
});
console.log(maxNum);

// Check if a given string is a palindrome (reads the same forwards and backwards).
function polin() {
let string="madam";
let strArr=string.split("");  
let rev=strArr.reverse().join('');
if(rev === string){
    console.log("is a polindrone");
}else {
    console.log("is not a polindrone");
}
};
polin();


// Reverse the digits of a given integer while maintaining the sign.
function revDigit(){
let num=123
let rev=0;
    while(num!==0){
         let rem=num%10
         rev=rev*10+rem;
         num = Math.trunc(num / 10);
    }
    // console.log(rev);
    return rev;
}
console.log(revDigit());
// another example
let num = 321;
let res = num.toString().split('').reverse().join('')
console.log(res);
// console.log(typeof(res));but type is string
// fibonacci another example
console.log("*************");
// fibonacci
// function fibonacci(n){
//        let num1 = 0;
//       let num2 = 1;
    
//        for(let i=1;i<=n;i++){
    
//          console.log(num1);
//          let res = num1 + num2;
//          num1 = num2;
//          num2 = res;     
//       }
//      }
//      fibonacci(10)

// Write a function to calculate the sum of all numbers in a nested array, handling arrays within arrays.
function sumArray() {
     let arr=[2,3,[4,6],9,[3,15,6],10];
     let res=arr.flat(Infinity);
    //  console.log(res);
    return  res.reduce((acc,currEle)=> acc+currEle,0)
};
console.log(sumArray());

// Count the number of vowels (a, e, i, o, u) in a given string.
function count() {
    let str="vittaahl";
    let vowels="aeiou";
    let count=0;
    //  Iterate through the string and count vowels
    for (const ele of str) {
        if(vowels.includes(ele)){
          count++;
        }
    }
    return count;
};
console.log(count());

// Flatten a nested array into a single-level array.

function flatten(){
let flatten=[1, [2, 3], [4, [5, 6]], 7];
let result=flatten.flat(Infinity);
return result;
};
console.log(flatten());

// move all zeroes in an array to end while keeping the order of non-zero elements
function zero(){
let arry = [1,4,0,0,8,2,0,3];
let a1=[];
let a2=[];
for(let i=0;i<arry.length;i++) {
       if(arry[i]>0){
         a1.push(arry[i]);
       }else {
        a2.push(arry[i]);
       }
}
let results=a1.concat(a2);
return results
};
console.log(zero());

// another way
    // arr.map((val)=>{
    //   if(val>0){
    //       a1.push(val)
    //   }
    //   else if(val == 0){
    //       a2.push(val)
    //   }
    // })
    // let result =a1.concat(a2)
    // console.log(result);
   
//  FizzBuzz : Fizz for multiples of 3 ,Buzz for multiple of 5; FizzBuzz for multiple of 3 and 5
 function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz "+i);
      } else if (i % 3 === 0) {
        console.log("Fizz "+i);
      } else if (i % 5 === 0) {
        console.log("Buzz "+i);
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz(15);

// find and return the first non-repeating charcter in a string?

function nonRepeat(s) {
      
      let sArr= s.split("");
      
      for(let i=0;i<sArr.length;i++){
        let count=0;
        for(let j=0;j<sArr.length;j++){
          if(sArr[i]===sArr[j]){
            count++;
          }
        } 
        if(count==1){
          console.log(sArr[i]+" non-repeating character");
          
        }
      }
};
(nonRepeat("fall"));


// Find the missing number in a sequence of integers from 1 to `n`, where one number is missing.
  
let v=[1,2,3,5];

let n=v.length+1;
let expectefSum= (n*(n+1))/2//15
let actualSum= v.reduce((acc,curr) =>acc+curr,0)//11
console.log(expectefSum-actualSum);

// Find the longest word in a given string.

let str="Find the longest word in a given string";
let strArr=str.split(" "); 
let resultt=strArr.reduce((intialLen,currentLen)=> (currentLen.length>intialLen.length)? currentLen:intialLen, "")
    console.log(resultt);

// Given an array of integers and a target sum, return the indices of the two numbers that add up to the target.
const ab=[7,2,15,11];
let target=17;

for(let i=0;i<ab.length;i++){
   for(let j=i+1;j<=ab.length;j++){
         if(ab[i]+ab[j]==target){
          console.log(i,j);
         }
   }
}


