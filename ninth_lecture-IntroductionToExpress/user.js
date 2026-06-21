const http=require('http');
const fs=require('fs');
const userRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
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
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();
      console.log(parsedBody);
      const params= new URLSearchParams(parsedBody); 
      // const bodyObject={};
      // for(const [key,value] of params){
      //   bodyObject[key]=value;
      // }
      // console.log(bodyObject);
      const bodyObject=Object.fromEntries(params);
      console.log(bodyObject); 
      // fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
      fs.writeFile('user.txt',JSON.stringify(bodyObject),error=>{
        console.log("data written successfully");
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
      });
 
    })
    
    

  }

  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>you can see our products here</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server</h1></body>');
    res.write('</html>');
    return res.end();
  }
  
 

}
//server.listen(3000);

module.exports=userRequestHandler;