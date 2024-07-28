const express=require('express');
const app=express();
const port=3000;

app.get('/total-distance',(req,res)=>{
  const distance1=parseFloat(req.query.distance1);
  const distance2=parseFloat(req.query.distance2);
  let totalDistance=distance1+distance2;
  res.send(totalDistance.toString());
})

app.get('/total-time',(req,res)=>{
  const time1=parseFloat(req.query.time1);
  const time2=parseFloat(req.query.time2);
  const time3=parseFloat(req.query.time3);
  let totalTime=time1+time2+time3;
  res.send(totalTime.toString());
})

app.get('/average-speed',(req,res)=>{
  const totalDistance =parseFloat(req.query.totalDistance);
  const totalTime =parseFloat(req.query.totalTime);
  let averageSpeed=totalDistance/totalTime;
  res.send(averageSpeed.toString());
})

app.get('/eta',(req,res)=>{
  const distance =parseFloat(req.query.distance);
  const speed =parseFloat(req.query.speed);
  let eta=distance/speed;
  res.send(eta.toString());
})

app.get('/total-calories',(req,res)=>{
  const duration1 =parseFloat(req.query.duration1);
  const duration2 =parseFloat(req.query.duration2);
  const caloriesPerMinute =parseFloat(req.query.caloriesPerMinute);
  let totalCalories=(duration1+duration2)*caloriesPerMinute;
  res.send(totalCalories.toString());
})

app.get('/interest-earned',(req,res)=>{
  const principal =parseFloat(req.query.principal);
  const rate =parseFloat(req.query.rate);
  const time=parseFloat(req.query.time);
  let interestEarned=(principal*rate*time)/100;
  res.send(interestEarned.toString());
})

app.listen(port,()=>{
  console.log('server is running at port : ',port);  
})