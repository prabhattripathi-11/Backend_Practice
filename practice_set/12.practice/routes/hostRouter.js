const express = require("express");
const path = require("path");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils");

const homeRegister=[];

hostRouter.get("/add-home",(req, res, next) => {
  res.render('addhome', { activeTab: 'add-home' });

})

hostRouter.post("/add-home",(req, res, next) => {
  const { title, price, location, rating, photo } = req.body;
  console.log("Home added Successfully", req.body);
  homeRegister.push({
    title: title || 'Unnamed home',
    price: price || '0',
    location: location || 'Unknown location',
    rating: rating || '0',
    photo: photo || ''
  });
  res.render('homeadded',{pageTitle:'Home added'});

})

exports.hostRouter=hostRouter;
exports.homeRegister=homeRegister;
