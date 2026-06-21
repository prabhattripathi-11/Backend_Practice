const express = require("express");
const path = require("path");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils");

const homeRegister = [];

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addhome');
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home added Successfully", req.body, req.body.title);
  homeRegister.push(req.body.title);
  res.render('homeadded');
});

exports.hostRouter = hostRouter;
exports.homeRegister = homeRegister;
