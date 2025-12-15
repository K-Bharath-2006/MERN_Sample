const express = require("express");

const userCon = require("./../Controllers/userController");

const userRoute = express.Router();
userRoute.route("/").get(userCon.getAllUsers).post(userCon.createUser);
userRoute.route("/:id").get(userCon.getUser).put(userCon.updateUser).delete(userCon.deleteUser);

module.exports = userRoute;