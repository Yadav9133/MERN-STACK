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
let a = 20;
let b = 30;

// c=a+b;
// console.log(c)
console.log(a + b, 'addition')
console.log(a - b, 'substraction')
console.log(a * b, 'multiplicaytion')
console.log(a / b, 'division')
console.log(++a, 'preincrement')
console.log(--b, 'predecrement')

// assignment operators
// let c=40;
console.log(c = 50);
console.log(c += 50);
console.log(c - +40);
console.log(c *= 10);
console.log(c /= 5);
console.log(c %= 5);

// comparison operator
let v = 10;
let k = 20;

console.log(v >= k);
console.log(v <= k);
console.log(v != k);
console.log(v == k);
// above will check == only values not case sensitive and data-type
console.log(v === k);
// above will check data-type aswell as values.

// conditional and ternary operator.
// syntax:(syntax)?"true stmnt":"false sttmnt";
let marks = 'vitthal';

let result = (marks >= 85) ? "Dist" :
    (marks >= 75) ? "1st class" :
        (marks > 60) ? "2nd class" :
            (marks >= 30) ? "3rd class" :
                (marks < 30) ? "Fail" : "wrong input";
console.log(result)


// write ternary operator code to check eligible for voting age as 18
// let age=4;
// let res=(age>=18)?"is eligible":"is not eligible";
// console.log(res);

// day3
// functions :is a set of instruction/code used to perform specific task.
// diff types funtions
// Named fnct,anonymous fnct,arrow fnct,IIFE
// named function
function fun(val) {
    let a = val;
    console.log(a);
}
fun(20);

// anonymous function
let c1 = function () {
    console.log('hello');
}
// console.log(c1);
c1();

// arrow function
let sum = (num1, num2) => num1 + num2;
console.log(sum(5, 9));

//IIFE
// closure
function abc() {
    let a1=20;
    function bcd(){
        let a1=10;
        console.log(abc.a1);   
    }
    bcd();
}
abc();

