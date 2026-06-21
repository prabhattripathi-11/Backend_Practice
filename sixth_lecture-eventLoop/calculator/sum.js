const sumRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  const body=[];
  let result;
  console.log('1.Before data event');
  req.on('data',(chunk)=>{
    console.log('2.chunk received');
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end',()=>{
    console.log('3.All chunks received');
    const parsedBody=Buffer.concat(body).toString();
    const params=new URLSearchParams(parsedBody);
    const bodyobject=Object.fromEntries(params);
    result=Number(bodyobject.first)+Number(bodyobject.second);
    console.log(result);
    console.log('4.Result calculated');
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