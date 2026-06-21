const express = require("express");

const path = require("path");

const rootDir = require("../utils/pathUtils");

const contactRouter = express.Router();

contactRouter.get("/contact-us",(req,res,next)=>{

  res.sendFile(path.join(rootDir,"views","contactus.html"));
  
})

contactRouter.post("/contact-us",(req,res,next)=>{
  console.log(req.body);

  res.sendFile(path.join(rootDir,"views","contact-success.html"));

})






// homeRouter.get("/",(req,res,next)=>{

//   console.log("Handling / for get",req.url,req.method);

//   res.sendFile(path.join(rootDir,"views","home.html"));
 
// })

module.exports=contactRouter;