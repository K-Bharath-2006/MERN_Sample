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


// //  Read and Write Operation


// let head = document.querySelector("p");

// console.log(head.textContent);

// head.textContent = "New Text from JS";


// let div = document.querySelector("div");

// div.innerHTML = "<p> This is New div Para </p>";



// console.log(div.textContent);
// console.log(div.innerHTML);

// // Add/Remove/Toggle class in tags

// let head = document.querySelector("h1");

// console.log(head);

// head.classList.add("color");
// head.classList.remove("border");
// head.classList.toggle("background");


// // styling

// let p = document.querySelector("p");

// p.style.color = "red";
// p.style.backgroundColor = "black"; 

// // here these css will be in --- inline css because of higher priority

// let ul = document.createElement("ul");
// let li = document.createElement("li");


// // Adding elements to the body --->
// li.textContent = "Item 1";
// ul.appendChild(li);

// document.body.appendChild(ul);

// let arr = ["Apple","Banana","Mango"]
// arr.forEach((el) => {
//     let lo = document.createElement("li");
//     lo.textContent = el;
//     ul.appendChild(lo);
// });



let form = document.querySelector("form");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let name = document.querySelectorAll("input")[0];
    let feedback = document.querySelectorAll("input")[1];
    if(name.value == ""){
        alert("Enter the name");
    }
    if(feedback.value.length < 5){
        alert("Enter the feedback minimum 5 characters");
    }
    console.log(name.value,feedback.value);
    let res = document.querySelector("#res");
    res.textContent = `Thankyou ${name.value} for the feedback! and feedback is ${feedback.value}`;
    form.reset();
})


// this will not work in arrow function
