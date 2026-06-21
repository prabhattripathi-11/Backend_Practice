const express=require('express');

const bodyParser=require('body-parser');

const app=express();  
app.use((req,res,next)=>{
  console.log("Came in first dummy middleware",req.url,req.method);
  next();
})
app.use((req,res,next)=>{
  console.log("Came in second dummy middleware",req.url,req.method);
  next();
})
// app.use((req,res,next)=>{
//   console.log("Came in third middleware",req.url,req.method);
//   res.send('<h1>welcome to Practice</h1>');
// })
app.get("/",(req,res,next)=>{
  console.log("Handling / for get",req.url,req.method);
  res.send(`'<h1>Hello from Express</h1>'`);
})
app.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for get",req.url,req.method);
  res.send(`<h1>Give your contact information</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="submit" value="Submit"/>
    </form>
  `);
})
app.post("/contact-us",(req,res,next)=>{
  console.log("first handling",req.url,req.method,req.body);
  next();
  

})


app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for post",req.url,req.method,req.body);
  res.send('<h1>Thank you for contacting us</h1>');

})


const PORT=3003;
app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`); 
})