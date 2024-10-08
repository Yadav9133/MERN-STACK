// day1
// let b = 50;
// let a = 20;
// a = b;
// console.log(a)
// console.log(b)

// let ba = {
//     name: "vitthal",
//     add: "hyd",
//     name: "vishu"

// }
// console.log(ba.name)

// let ab = {
//     name: "yadav",
//     add: "banglore"
// }
// // ab.name=ba.name
// ab = ba
// console.log(ab);
// console.log(ba)

// day2 operators
// arithmetic oparators
let a=20;
let b=30;

// c=a+b;
// console.log(c)
console.log(a+b,'addition')
console.log(a-b,'substraction')
console.log(a*b,'multiplicaytion')
console.log(a/b,'division')
console.log(++a,'preincrement')
console.log(--b,'predecrement')

// assignment operators
// let c=40;
console.log(c=50);
console.log(c+=50);
console.log(c-+40);
console.log(c*=10);
console.log(c/=5);
console.log(c%=5);

// comparison operator
let v=10;
let k=20;

console.log(v>=k);
console.log(v<=k);
console.log(v!=k);
console.log(v==k);
// above will check == only values not case sensitive and data-type
console.log(v===k);
// above will check data-type aswell as values.

// conditional and ternary operator.
// syntax:(syntax)?"true stmnt":"false sttmnt";
let marks='vitthal';

let result=(marks>=85)?"Dist":
           (marks>=75)?"1st class":
           (marks>60)?"2nd class":
           (marks>=30)?"3rd class":
           (marks<30)?"Fail":"wrong input";
console.log(result)

           
// write ternary operator code to check eligible for voting age as 18
let age=4;
let res=(age>=18)?"is eligible":"is not eligible";
console.log(res);