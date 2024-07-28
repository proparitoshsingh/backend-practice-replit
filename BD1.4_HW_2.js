const express = require('express');
const app = express();
const port = 3000;

function generateProfileUrl(username) {
   return `https://github.com/${username}`;
}

app.get('/github-profile', (req, res) => {
   const username = req.query.username;
   res.send(generateProfileUrl(username));
})

function generateCertificate(firstName, lastName, courseName) {
   return `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName.toUpperCase()}`;
}

app.get('/certificate', (req, res) => {
   const firstName = req.query.firstName;
   const lastName = req.query.lastName;
   const courseName = req.query.courseName;
   res.send(generateCertificate(firstName, lastName, courseName));
})

function calculateGrade(maths, science, english) {
   const totalMarks = maths + science + english;
   const percentage = Math.round((totalMarks / 300) * 100);
   return `Your grade in percentage is ${percentage}%`;
}

app.get('/grade', (req, res) => {
   const maths = parseInt(req.query.maths);
   const science = parseInt(req.query.science);
   const english = parseInt(req.query.english);
   res.send(calculateGrade(maths, science, english));
})

function splitBill(billAmount, numberOfFriends) {
   const splitAmount = (billAmount / numberOfFriends);
   return `Result: Each friend owes Rs. ${splitAmount} against the bill`;
}

app.get('/split-bill', (req, res) => {
   const billAmount = parseFloat(req.query.billAmount);
   const numberOfFriends = parseInt(req.query.numberOfFriends);
   res.send(splitBill(billAmount, numberOfFriends));
})

function calculateSalary(hourlyWage, totalHours) {
   const monthlySalary = hourlyWage * totalHours;
   return `Result: Your monthly salary is ₹${monthlySalary}`;
}

app.get('/monthly-salary', (req, res) => {
   const hourlyWage = parseFloat(req.query.hourlyWage);
   const totalHours = parseInt(req.query.totalHours);
   res.send(calculateSalary(hourlyWage, totalHours));
})

app.listen(port, () => {
   console.log('Server is running at port:', port);
})
