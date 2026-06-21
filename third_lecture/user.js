const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></anhead>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Username"><br>');
    res.write('<label  for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');
    res.write('<label  for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase()==='/submit' && req.method==='POST'){
    fs.writeFileSync('user.txt','Prabhat Tripathi');
    res.statusCode=302;
    res.setHeader('Location','/');
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