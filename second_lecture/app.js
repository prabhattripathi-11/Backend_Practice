const http=require('http');
// function requestListner(req,res){
//   console.log(req);
  
// }
// http.createServer(requestListner);
// http.createServer(function(req,res){
//   console.log(req);
// })
const server=http.createServer((req,res)=>{
  console.log(req);
  process.exit();//stops the event loop

})
//server.listen(3000);
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
  
}) 