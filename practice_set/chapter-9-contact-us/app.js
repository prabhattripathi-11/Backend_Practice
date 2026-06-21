const express=require('express');
const path=require("path");

const homeRouter=require("./routes/homeRouter");
const rootDir=require("./utils/pathUtils");

const contactRouter=require("./routes/contactRouter");

const app=express();  

app.use(express.urlencoded());



app.use(homeRouter);


app.use(contactRouter);

app.use((req,res,next)=>{

  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));


});

const PORT=3003;
app.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`); 
})