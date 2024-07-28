const express = require('express');
const app = express();
const port = 3000;

app.get('/check-number', (req, res) => {
   const number = parseFloat(req.query.number);
   if (number >= 0) {
      res.send("Number is positive");
   } else {
      res.send("Number is negative");
   }
})

app.get('/check-even-odd', (req, res) => {
   const number = parseInt(req.query.number);
   if (number % 2 === 0) {
      res.send("Number is even");
   } else {
      res.send("Number is odd")
   }
})

app.get('/check-login', (req, res) => {
   const isLoggedIn = req.query.isLoggedIn === "true";
   if (isLoggedIn) {
      res.send("User is logged in");
   } else {
      res.send("User is not logged in");
   }
})

app.get('/check-discount', (req, res) => {
   const age = parseInt(req.query.age);
   if (age > 65) {
      res.send("User is eligible for a discount");
   } else {
      res.send("User is not eligible for a discount");
   }
})

app.get('/check-number-type', (req, res) => {
   const number = parseFloat(req.query.number);
   if (number > 0) {
      res.send("Number is positive");
   } else if (number < 0) {
      res.send("Number is negative");
   } else {
      res.send("Number is zero");
   }
})

app.get('/check-temperature', (req, res) => {
   const temperature = parseFloat(req.query.temperature);
   if (temperature < 15) {
      res.send("Temperature is cold");
   } else if (temperature <= 25) {
      res.send("Temperature is warm");
   } else {
      res.send("Temperature is hot");
   }
})

app.get('/check-activity-level', (req, res) => {
   const steps = parseInt(req.query.steps);
   if (steps < 5000) {
      res.send("Activity level is low");
   } else if (steps <= 10000) {
      res.send("Activity level is moderate");
   } else {
      res.send("Activity level is high");
   }
})

app.get('/check-engagement', (req, res) => {
   const likes = parseInt(req.query.likes);
   if (likes < 100) {
      res.send("Engagement level is low");
   } else if (likes <= 500) {
      res.send("Engagement level is medium");
   } else {
      res.send("Engagement level is high");
   }
})
app.listen(port, () => {
   console.log('server is running at port : ', port);
})