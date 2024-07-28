const express = require('express');
const app = express();
const port = 3000;

app.get('/check-bmi', (req, res) => {
   const weight = parseFloat(req.query.weight);
   const height = parseFloat(req.query.height);
   const bmi = weight / (height * height);
   if (bmi < 18.5) {
      res.send("BMI category is underweight");
   } else if (bmi < 24.9) {
      res.send("BMI category is normal weight");
   } else if (bmi < 29.9) {
      res.send("BMI category is overweight");
   } else {
      res.send("BMI category is obese");
   }
})

app.get('/check-performance', (req, res) => {
   const grade = parseInt(req.query.grade);
   if (grade >= 90) {
      res.send("Academic performance is excellent");
   } else if (grade >= 75) {
      res.send("Academic performance is good");
   } else if (grade >= 50) {
      res.send("Academic performance is average");
   } else {
      res.send("Academic performance is poor");
   }
})

app.get('/check-age-group', (req, res) => {
   const age = req.query.age;
   if (age <= 12) {
      res.send("Age group is child");
   } else if (age <= 17) {
      res.send("Age group is teenager");
   } else if (age <= 64) {
      res.send("Age group is adult");
   } else {
      res.send("Age group is senior");
   }
})

app.get('/check-loan-eligibility', (req, res) => {
   const creditScore = parseInt(req.query.creditScore);
   if (creditScore >= 750) {
      res.send("Loan eligibility is high");
   } else if (creditScore >= 650) {
      res.send("Loan eligibility is medium");
   } else {
      res.send("Loan eligibility is low");
   }
})

app.get('/check-tax-bracket', (req, res) => {
   const income = parseFloat(req.query.income);
   if (income <= 500000) {
      res.send("You fall under the 10% tax bracket");
   } else if (income <= 1000000) {
      res.send("You fall under the 15% tax bracket");
   } else if (income <= 1500000) {
      res.send("You fall under the 20% tax bracket");
   } else {
      res.send("You fall under the 30% tax bracket");
   }
})

app.listen(port, () => {
   console.log('server is running at port : ', port);
})