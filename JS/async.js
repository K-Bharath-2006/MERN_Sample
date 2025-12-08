// setTimeout(() => {
//   console.log("setTimeout Function");
// }, 0);

// // console.log("Welcome home Black");

// // setTimeout(() => {
// //   console.log("Function 1");
// //   setTimeout(() => {
// //     console.log("Function 2");
// //     setTimeout(() => {
// //       console.log("Function 3");
// //       setTimeout(() => {
// //         console.log("Function 4");
// //         setTimeout(() => {
// //           console.log("Function 5");
// //         }, 2000);
// //       }, 2000);
// //     }, 2000);
// //   }, 2000);
// // }, 2000);

// let myPromise = new Promise((res, rej) => {
//   let marks = 80;
//   if (marks >= 60) {
//     res("Students is passed");
//   } else {
//     rej("Student is failed");
//   }
// });


// // ways to call a promise


// // .then() and .catch()
// myPromise
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Async and await
// // no error handling

// let handlePromise = async ()=> {
//     try {
//         let response = await myPromise;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };

// handlePromise();


let fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data = await response.json();
        localStorage.setItem("responseData",JSON.stringify(data));
        console.log("value is ",data);
    } catch (error) {
        console.log(error);
    }
}

// fetchData();

let localData = JSON.parse(localStorage.getItem("responseData")) || [];

if(localData.length <= 0){
    fetchData();
}