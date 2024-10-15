// console.log(10);

// String methods 
let a="harsh"
console.log(a);

// 1) length('property')
// .length is a property of the string, not a method.
// It returns the total number of characters in the string, including spaces, special characters, and punctuation.
// It does not require parentheses or parameters. It is accessed directly as string.length

console.log(a.length);//5

// 2) charAt(num index-position):
console.log(a.charAt())//h

// 3) indexOf(string or character,start(optional)):
console.log(a.indexOf('r',4));//2 -1 bcoz after 4th index no r substr there
console.log(a.indexOf('v'));//-1

//4) toupperCase()//no parameters
// string will modify
// The original string remains unchanged, as strings in JavaScript are immutable.

console.log(a.toUpperCase());
console.log(a);//orignal remain same

// 5)charcodeAt(index)
// If the index is out of range (negative or greater than the string length), charCodeAt() returns NaN.
// Unicode value (character code) of a specific character in a string.

console.log(a.charCodeAt(0));//104

// 6)include(boolean returns sub-string,start (as optional) as param)
// start (optional, position to start searching from, default is 0)
console.log(a.includes('rs'));//true

// 7)concat(str1,str2,strN) used to concat more than one string.
// Parameters: One or more strings to concatenate.
// Return: A new concatenated string
let b='rao';
let res=(b.concat(a));
console.log(res);

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2, "!");
console.log(result);


console.log(b);
console.log(a);

// 8)split method()
// s used to split a string into an array of substrings
// string.split([separator], [limit])parametrs
// separator (optional): Defines where the split occurs.
// limit (optional): Limits the number of elements in the resulting array.
// Return: An array of substrings.
let str = "vittal, rao!";
let result1 = str.split(", ");
console.log(result1);  // Output: ["Hello", "World!"]

let strr = "Hello";
let result3 = strr.split("");
console.log(result3);

let st = "apple, banana, cherry, date";
let resul = st.split(", ", 3);
console.log(resul);

// used to extract a portion of a string and return it as a new string
// 9)slice()
// string.slice(startIndex, [endIndex])
// If this value is negative, it is treated as stringLength + startIndex, meaning it counts from the end of the string.
// The original string remains unchanged (strings in JavaScript are immutable).
let s = "Hello, World!";
let r = s.slice(0, 5);
console.log(r);  // Output: "Hello"

let s1 = "JavaScript";
let r1= s1.slice(-6);  // Extracts from 6 characters from the end
console.log(r1);  // Output: "Script"

// let str = "I love JavaScript!";
// let result = str.slice(2, 6);  // Extracts characters from index 2 to 5
// console.log(result);  // Output: "love"


//10) repeat(count num as param) return new string org remail same
let sr='javascript ';
console.log(sr.repeat(3));

//     - Params: count (the number of times to repeat the string).
//     - Returns: A new string with the repeated content.


        let str12=new String('hello')
        console.log(str12);
        
        console.log(typeof str12);
        
            // console.log(typeOf str12)//object

           let arr= [10,20,20,30,40];
           console.log(arr);
           
             let ress=  new Set(arr);
             console.log(ress);
             console.log(typeof ress);
             
           
          let arn= [1,2,3,4,5,6];
          let resultt=[]
          let ind=0;
          arn.map(ele=>{
                if (ele%2===0) {
                resultt[ind++]=ele*2
                //  resultt.push(ele*2)
                }
          })
          console.log(resultt);
          








        
