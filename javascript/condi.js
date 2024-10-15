// conditional statement if else

function one(num){
    if(num >20){
        console.log("is greater than 20");  
    }else {
        console.log("is not greater than 20");
        
    }
}
one(5);

// let a=10,b=20,c=30,d=40;
// max num else if ladder
function two(a,b,c,d) {
     if(a>b && a>c && a>d){
        console.log("is max"+a);
     }else if(b>c && b>d){
        console.log("is max"+b);
     }else if(c>d){
        console.log("is max"+c); 
     }else {
        console.log("is max"+d);
        
     }
}
two(100,20,30,40)

// switch

function tree(value){
switch(value) {
    case 10: console.log("is matched");
    break;
    case 20: console.log("is mathed");
    break;
    default: console.log("both failed");
}
}tree(20)

function four(value) {

    switch(true) {
    case (value>30) : console.log("");
    break;
    case (value<30) : console.log("20 is greater");
   };
}
four(20)




// Math and Date methods
let dat=new Date();
console.log(dat.getFullYear());

console.log(dat.getDay());

console.log(dat.getMinutes());

console.log(dat.getMonth());

console.log(dat.setDate(15),"updated date");

console.log(dat.setHours(17));


// let m=new Math();

console.log(Math.round(1.7));
console.log(Math.abs(-24));
console.log(Math.floor(1.5));
console.log(Math.ceil(1.5));







