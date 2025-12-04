// this will print undefined
// console.log(a)


var a = 10;
//  Global value / Scope

console.log(a)


// console.log(b) --> this is reference error
let b = 20;
b = 30; 
// can be edit
console.log(b);


// block scope
{
    // var a = 10; --> for this  new memory won't created
    let b = 100; 
    // this will create new memory
    console.log(b);
}

const c = 1000;
// c = 2000; --> can't be edit because it is const and this will cause TypeError
console.log(c)


