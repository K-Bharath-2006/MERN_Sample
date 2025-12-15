const { log } = require("console");
const express = require("express");

const fs = require("fs");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync("./users.json","utf-8"));
const port = 9000;
app.listen(port,() => {
    console.log("Server Started Successfully");
});


// CURD Operation  ....

// C : Create post
// U : Update put and patch
// R : Read get
// D : Delete delete


app.get("/api/users",(req,res)=> {
    res.status(200).json({
        status : "Successful",
        length : jsonData.length,
        data : {
            jsonData,
        },
    });
});


app.get("/api/users/:id",(req,res)=> {
    let id = req.params.id;
    let user = jsonData.find((el) => el.id == id);
    if(!user){
        res.status(401).json({
            status : "Fail",
            message : "User not found",
        });
    }
    res.status(200).json({
        status : "Successful",
        data : {
            user,
        },
    });
});
app.post("/api/users",(req,res)=> {
    const id = jsonData.length + 1;
    const user = Object.assign({id: id},req.body);
    jsonData.push(user);
    fs.writeFile("./users.json",JSON.stringify(jsonData),"utf-8",(err)=>{
        if(err){ 
            res.status(400).json({
              status : "Failed to Write",
            });
        }
        res.status(201).json({
            status : "Successful",
            data : user,
        }); 
    });
});


app.put("/api/users/:id",(req,res) => {
    const id = req.params.id;
    const user = jsonData.find((el) => el.id == id);
    if(!user){
        res.status(401).json({
            status : "Failed",
            message : "User Not Found",
        });
    }
    res.status(200).json({
        status : "Success",
        message : "Update Successfully",
    });
});