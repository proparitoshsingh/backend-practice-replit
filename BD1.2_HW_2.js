const express = require('express');
const app = express();
const port = 3000;

app.get('/bmi', (req, res) => {
   const height = parseFloat(req.query.height);
   const weight = parseFloat(req.query.weight);
   let bmi = (weight / (height * height));
   res.send("Your BMI is " + bmi);
})

app.get('/checkout', (req, res) => {
   const product = req.query.product;
   const units = parseInt(req.query.units);
   const price = parseFloat(req.query.price);
   let total_price = price * units;
   res.send("Your total for " + units + " " + product + " is " + total_price);
})

app.get('/grade', (req, res) => {
   const maths = parseInt(req.query.maths);
   const science = parseInt(req.query.science);
   const english = parseInt(req.query.english);
   let gradeInPercentage = ((maths + science + english) / 300 * 100);
   res.send("Your grade in percentage is " + gradeInPercentage + "%");
})

app.get('/discounted-price', (req, res) => {
   const cartTotal = parseFloat(req.query.cartTotal);
   const discount = parseFloat(req.query.discount);
   let discountedPrice = (cartTotal - (cartTotal * (discount / 100)));
   res.send("Result: Your bill amount is " + discountedPrice);
})

app.get('/split-bill', (req, res) => {
   const billAmount = parseFloat(req.query.billAmount);
   const numberOfFriends = parseInt(req.query.numberOfFriends);
   let splitAmount = (billAmount / numberOfFriends);
   res.send("Result: Each friend owes Rs. " + splitAmount + " against the bill");
})

app.get('/celsius-to-fahrenheit', (req, res) => {
   const temperature = parseFloat(req.query.temperature);
   let fahrenheit = (temperature * 9 / 5 + 32);
   res.send("Result: " + fahrenheit + " Fahrenheit");
})

app.get('/monthly-salary', (req, res) => {
   const hourlyWage = parseFloat(req.query.hourlyWage);
   const totalHours = parseInt(req.query.totalHours);
   const monthlySalary = hourlyWage * totalHours;
   res.send("Result: Your monthly salary is ₹" + monthlySalary);
})

app.listen(port, () => {
   console.log('server is running at port : ', port);
})