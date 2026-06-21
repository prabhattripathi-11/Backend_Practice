// console.log("hi,I am Prabhat Tripath");
const fw=require('fs')
fw.writeFile('output.txt','writing file',(err)=>{
  if(err) console.log("error happend");
  else console.log("file created successfully");
  
});
