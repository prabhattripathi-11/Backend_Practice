const sumRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  const body=[];
  req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end',()=>{
    const parsedBody=Buffer.concat(body).toString();
    const params=new URLSearchParams(parsedBody);
    const bodyobject=Object.fromEntries(params);
    const result=Number(bodyobject.first)+Number(bodyobject.second);
    console.log(result);
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Result: ${result}</h1>
         
        </body>
      </html>
    `); 
    return res.end();
    });

}
module.exports=sumRequestHandler;