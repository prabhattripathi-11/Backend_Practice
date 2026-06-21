const sumRequestHandler=require('./sum');
const requestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url=== '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a><br>
        </body>
      </html>
    `); 
    return res.end();
  }
  
  else if(req.url.toLowerCase()==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" name="first" placeholder="Enter first number" >
            <input type="text" name="second" placeholder="Enter second number">
            <input type="submit" value="Calculate Sum">
          </form>
        </body>
      </html>
    `); 
    return res.end();
  }
  else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
    return sumRequestHandler(req,res);
  }
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>404 page does not exist</h1>
          <a href="/calculator">Go to Calculator</a><br>
        </body>
      </html>
    `); 
    return res.end();

 
}
module.exports=requestHandler;