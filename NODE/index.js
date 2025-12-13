// //fs : FileSystem

// const { log } = require("console");
const { log } = require("console");
const fs = require("fs");
const http = require("http");


// // blocking code
// // synchronous
// // 1.path 2.encryption


// let read = fs.readFileSync("./Files/append.txt","utf-8");

// console.log(read);

// // 2.Write the file
// //  1.path 2.content 3.encryption
// fs.writeFileSync("./Files/a.txt",read,"utf-8");



// let read2 = fs.readFileSync("./Files/a.txt","utf-8");

// console.log(read2);


// // non-blocking code
// // Asynchornous

// //read data
// // path,encryption,callbackFn(err,data)

// fs.readFile("./Files/read.txt","utf-8",(err,data) => {
//     if(err) return console.log("Error");
//     console.log(data);
//     fs.readFile(`./Files/${data}.txt`,"utf-8",(err1,data1) => {
//         if(err1) return console.log(err1);
//         console.log(data1);
//     });
// });


// // path,data,encryption,callbackFn(err)
// fs.writeFile("./Files/a.txt","New Content","utf-8",(err) => {
//     if(err) return console.log(err);
//     console.log("Written Successfully");
// });


// Http Status Code

// 1XX-199 : Information
// 2XX : Successful Casses
// 3XX : Redirectional
// 4XX : Client Error
// 5XX : Server Error


let htmlData = fs.readFileSync("./Files/index.html","utf-8");
console.log(htmlData);

// 1. We have to create the server 
const server = http.createServer((req,res)=>{
    console.log(req.url);
    // res.end("Server Create using Node");
    res.end(htmlData);
});

// this is called server side rendering because we take the html data from server side like above

// 2. We have to start the server
// 2.1 port no,2.2 ip address 2.3 callback
server.listen(9000,"127.0.0.1",()=>{
    console.log("Server started on 9000");
    
})