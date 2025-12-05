// // 1. Tag Selector

// let s1 = document.getElementsByTagName("h1");

// console.log(s1[0]);


// // 2. Class Selector

// let s2 = document.getElementsByClassName("a");
// //  Html Collection
// console.log(s2[1]);


// // 3. ID Selector

// let s3 = document.getElementById("b");
// //  it will return the single and first element
// console.log(s3);


// // 4. Query Selector

// let s4 = document.querySelector("h1");
// //  it works on all three
// // it will return single and first element
// console.log(s4);


// // 5 . Query SelectorAll

// let s5 = document.querySelectorAll("#b");
// // it will return Nodelist Array
// console.log(s5);


//  Read and Write Operation


let head = document.querySelector("p");

console.log(head.textContent);

head.textContent = "New Text from JS";


let div = document.querySelector("div");

div.innerHTML = "<p> This is New div Para </p>";



console.log(div.textContent);
console.log(div.innerHTML);

