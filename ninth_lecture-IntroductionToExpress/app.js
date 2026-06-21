//core modules


//external modules
const express=require('express');

//local modules
const userRequestHandler=require('./user');

const app=express();
//we use app.get for exact match of url and method
app.get("/",(req,res,next)=>{
  console.log("Came in first middleware",req.url,req.method);
  next();
})
app.use("/submit",(req,res,next)=>{
  console.log("Came in second middleware",req.url,req.method);
  res.send('<h1>Hello from Express</h1>');
})

//we cannot use next() after sending response to client
app.use("/",(req,res,next)=>{
  console.log("came from another middleware",req.url,req.method);
  res.send('<h1>came from another middleware</h1>');
})



const PORT=3003;
app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`); 
})