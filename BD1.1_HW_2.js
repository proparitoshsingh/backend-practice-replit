const express=require('express');
const app=express();
const port=3000;

app.get('/custom-commit',(req,res)=>{
  const {type, message}=req.query;
  res.send(type+": "+message);
})

app.get('/certificate',(req,res)=>{
  const {firstName, lastName, courseName}=req.query;
  res.send("This certification is awarded to "+firstName+" "+lastName+" for completing the course "+courseName);
})

app.get('/autoreply',(req,res)=>{
  const {startMonth, endMonth}=req.query;
  res.send("Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from "+startMonth+" till "+endMonth+". Your enquiry will be resolved by another colleague.");
})

app.get('/secureurl',(req,res)=>{
  const {domain}=req.query;
  res.send("https://"+domain);
})

app.get('/sendotp',(req,res)=>{
  const {otpCode}=req.query;
  res.send("Your OTP for account verification is "+otpCode+". Do not share this with anyone");
})

app.get('/welcome',(req,res)=>{
  const {firstName, email}=req.query;
  res.send("Hey "+firstName+". We're excited to have you here, we'll send future notifications to your registered mail ("+email+")");
})

app.get('/github-profile',(req,res)=>{
  const {userName}=req.query;
  res.send("https://github.com/"+userName);
})

app.get('/text-to-csv',(req,res)=>{
  const {id, email, rollNumber}=req.query;
  res.send(id+", "+email+", "+rollNumber);
})

app.listen(port,()=>{
  console.log('server is running at port : ',port);  
})