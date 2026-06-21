const http=require('http');
const testingSyntax=require('./syntax');
const runTime=require('./runtime');
const logical=require('./logical ');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);

  //testingSyntax();
  //runTime();
  logical();
})
const PORT=3003;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`); 
})