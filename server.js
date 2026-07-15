const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
  console.log('Received a GET request at /');
    res.send('Hello World');
});
app.get('/about/:id',(req,res)=>{
  console.log(req.params);
  res.send(`About page with id: ${req.params.id}`);

})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});