const express=require('express');
const app=express();
const port=3000;

app.get('/shout',(req,res)=>{
  const {name}=req.query;
  res.send(name.toUpperCase())
})

app.get('/fullname',(req,res)=>{
  const {firstName, lastName}=req.query;
  res.send(firstName+" "+lastName);
})

app.get('/date',(req,res)=>{
  const {month, year}=req.query;
  res.send(month+", "+year);
})

app.get('/greet',(req,res)=>{
  const {name}=req.query;
  res.send("Namaste, "+name);
})

app.get('/address',(req,res)=>{
  const {street, city, state}=req.query;
  res.send(street+", "+city+", "+state);
})

app.get('/email',(req,res)=>{
  const {username, domain}=req.query;
  res.send(username+'@'+domain);
})

app.listen(port,()=>{
  console.log('server is running at port : ',port);  
})