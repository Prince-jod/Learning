const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
  console.log('Received a GET request at /');
    res.send('Hello World');
});
app.post('/post',(req,res)=>{
  console.log('Received a POST request at /post');
    res.send('POST request received');
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});