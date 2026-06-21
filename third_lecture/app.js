const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>you can see our products here</h1></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
 

})
//server.listen(3000);
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
  
}) 