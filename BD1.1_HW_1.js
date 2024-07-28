const express=require('express');
const app=express();
const port=3000;

app.get('/whisper',(req,res)=>{
  const {name}=req.query;
  res.send(name.toLowerCase())
})

app.get('/full-product-name',(req,res)=>{
  const {companyName, productName}=req.query;
  res.send(companyName+" "+productName);
})

app.get('/date',(req,res)=>{
  const {month, year}=req.query;
  res.send(month+"/"+year);
})

app.get('/greet',(req,res)=>{
  const {city}=req.query;
  res.send("You live in "+city);
})

app.get('/capital',(req,res)=>{
  const {capital, country}=req.query;
  res.send(capital+" is the capital of "+country+".");
})

app.get('/email',(req,res)=>{
  const {firstName, lastName, domain}=req.query;
  res.send(firstName+"."+lastName+"@"+domain);
})

app.listen(port,()=>{
  console.log('server is running at port : ',port);  
})