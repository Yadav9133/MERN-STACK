// promises and fetch

const p=new Promise((res,rej)=> {
    let a=1;
    let b=2;
    if(a==b){
        res("promise success");
    }else {
        rej("promise failed")
    }
})

p.then((msg) => {
    console.log(msg);
})

p.catch((msg) => {
    console.log(msg);
})