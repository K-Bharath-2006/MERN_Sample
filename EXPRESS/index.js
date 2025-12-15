const { log } = require("console");
const express = require("express");

const fs = require("fs");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());

const userRoute = require("./Routes/userRoutes")


// CURD Operation  ....

// C : Create post
// U : Update put and patch
// R : Read get
// D : Delete delete



// MiddleWare

app.use((req,res,next) => {
    const now = new Date();
    req.requestTimeOfHit = now.toLocaleString();
    next();
});

app.use((req,res,next) => {
    req.message = "Hey Black";
    next();
});
// Controllers 





// Routes



// app.get("/api/users",getAllUsers);

// app.get("/api/users/:id",getUser);

// app.post("/api/users",createUser);

// app.put("/api/users/:id",updateUser);

// app.delete("/api/users/:id",deleteUser);

app.use("/api/users",userRoute);

const port = 9000;
app.listen(port,() => {
    console.log("Server Started Successfully on",port);
});