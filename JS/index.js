// // this will print undefined
// // console.log(a)


// var a = 10;
// //  Global value / Scope

// console.log(a)


// // console.log(b) --> this is reference error
// let b = 20;
// b = 30; 
// // can be edit
// console.log(b);


// // block scope
// {
//     // var a = 10; --> for this  new memory won't created
//     let b = 100; 
//     // this will create new memory
//     console.log(b);
// }

// const c = 1000;
// // c = 2000; --> can't be edit because it is const and this will cause TypeError
// console.log(c)


// // Functions 

// // 1 . Named Functions

// //  here we can call function before its declaration.
// fun();
// function fun(){
//     console.log("Named Function");
// }

// fun();

// // 2. Function Expression
 
// //  but here we can't call function before its declaration.
// // funExp(); --> this will cause ReferenceError if let or else TypeError if var is used.
// var funExp = function(){
//     console.log("Function Expression");
// }   

// funExp();

// // 3. Arrow Function(ES6)

// let arrowFun = () => {
//     console.log("Arrow Function");
// }

// arrowFun();

// // 4.Callback Function and 5. IIFE(Immediately Invoked Function Expression)

// (() => {
//     console.log("Callback and IIFE");
// })();

// let cd=[1,2,3,4,"ssc"];
// let d=[1,2,3,4,"ssc"];
// console.log([]==[])

// let arr=[1,2,3,4,5,6];
// console.log(arr);

// //for loop
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]+i;
// }
// console.log(arr);

// let arr1=[1,2,3,4,5,6];
// //forEach

// arr1.forEach((element,index)=>{
//     console.log(element,index);
// });
// let arr2=[1,2,3,4,5,6];
// // let aa=arr.map((el,ind)=>{
//     //
//   //  return el+ind;
// //})
// let aa=arr.map((el,ind)=>el+ind);
// console.log(arr2);
// console.log(aa);


let a = [1,2,3,4,5,6,7,8,9];

let b = a.filter((el,index) => {
    return index > 4;
});

console.log(b);

let c = a.reduce((acc,el,index) => {
    console.log(acc,el);

    return acc + el;
}, 200);

console.log(c);

