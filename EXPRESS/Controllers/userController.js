
const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("./users.json","utf-8"));


exports.getAllUsers = (req,res)=> {
    res.status(200).json({
        status : "Successful",
        length : jsonData.length,
        time : req.requestTimeOfHit,
        msg : req.message,
        data : {
            jsonData,
        },
    });
};
exports.getUser = (req,res)=> {
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
        time : req.requestTimeOfHit,
        data : {
            user,
        },
    });
};
exports.createUser = (req,res)=> {
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
            time : req.requestTimeOfHit,
            data : user,
        }); 
    });
};

exports.updateUser = (req,res) => {
    const id = req.params.id;
    const user = jsonData.find((el) => el.id == id);
    if(!user){
        res.status(404).json({
            status : "Failed",
            message : "User Not Found",
        });
    }
    res.status(200).json({
        status : "Success",
        time : req.requestTimeOfHit,
        message : "Update Successfully",
    });
};

exports.deleteUser = (req,res) => {
    const id = req.params.id;
    const user = jsonData.find((el) => el.id == id);
    if(!user){
        res.status(404).json({
            status : "Failed",
            message : "User Not Found",
        });
    }
    res.status(204).json({
        status : "Success",
        time : req.requestTimeOfHit,
        message : "Update Successfully",
    });
};