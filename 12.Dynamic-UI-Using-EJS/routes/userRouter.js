const express = require('express');
const userRouter = express.Router();

const path = require("path");

const rootDir = require("../utils/pathUtils");

const { homeRegister } = require("./hostRouter")

userRouter.get("/", (req, res, next) => {
  console.log(homeRegister);
  res.render('home', { homeRegister });
});

module.exports = userRouter;