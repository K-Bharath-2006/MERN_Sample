var a = 10;
let b = 20;
const c = 100;

console.log(a);
console.log(b);
console.log(c); 

function fun(){
    console.log("Named Function");
}

fun();

let funExp = function() {
    console.log("Expressed function");
}

funExp();

let arrowFun = ()=> {
    console.log("Arrow Function");
}

arrowFun();

(()=> {
    console.log("Callback and IIFE Function");
})();