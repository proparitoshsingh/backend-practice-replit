const express = require('express');
const app = express();
const port = 3000;

app.get('/check-whole-number', (req, res) => {
   const number = parseFloat(req.query.number);
   if (number >= 0) {
      res.send("Number is whole number");
   } else {
      res.send("Number is not whole number");
   }
})

app.get('/check-equal', (req, res) => {
   const num1 = parseInt(req.query.num1);
   const num2 = parseInt(req.query.num2);
   if (num1 === num2) {
      res.send("Numbers are equal");
   } else {
      res.send("Numbers are not equal");
   }
})

app.get('/check-active', (req, res) => {
   const isActive = req.query.isActive === "true";
   if (isActive) {
      res.send("User is Active");
   } else {
      res.send("User is not Active");
   }
})

app.get('/check-discount', (req, res) => {
   const cost = parseInt(req.query.cost);
   if (cost > 1000) {
      res.send("User is eligible for a discount");
   } else {
      res.send("User is not eligible for a discount");
   }
})

app.get('/check-experience', (req, res) => {
   const workExperience = parseFloat(req.query.workExperience);
   if (workExperience > 0) {
      res.send("Person is experienced");
   } else if (workExperience < 0) {
      res.send("Person is non-working");
   } else {
      res.send("Person is fresher");
   }
})

app.get('/check-result', (req, res) => {
   const result = parseFloat(req.query.result);
   if (result > 80) {
      res.send("The grade is A");
   } else if (result >= 50) {
      res.send("The grade is B");
   } else {
      res.send("The grade is Fail");
   }
})

app.get('/check-attendance', (req, res) => {
   const attendance = parseInt(req.query.attendance);
   if (attendance < 50) {
      res.send("Attendance level is low");
   } else if (attendance <= 90) {
      res.send("Attendance level is moderate");
   } else {
      res.send("Attendance level is high");
   }
})

app.get('/check-rating', (req, res) => {
   const stars = parseInt(req.query.stars);
   if (stars < 3) {
      res.send("Restaurant rating is low");
   } else if (stars <= 4) {
      res.send("Restaurant rating is medium");
   } else {
      res.send("Restaurant rating is high");
   }
})
app.listen(port, () => {
   console.log('server is running at port : ', port);
})