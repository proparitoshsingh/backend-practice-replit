const express = require('express');
const app = express();
const port = 3000;


function getWelcomeMessage() {
   return "We will now learn functions!";
}

app.get('/welcome', (req, res) => {
   res.send(getWelcomeMessage());
})

function getGreetingMessage(username) {
   return `Hey, ${username}! Are you ready to learn functions with us?`;
}

app.get('/greet', (req, res) => {
   const username = req.query.username;
   res.send(getGreetingMessage(username));
})

function checkYearsOfExp(yearsOfExp) {
   return yearsOfExp > 0 ? "You have some experience with functions. Great!" : "No worries. You will start writing functions in no time!";
}

app.get('/message', (req, res) => {
   const yearsOfExp = parseInt(req.query.yearsOfExp);
   res.send(checkYearsOfExp(yearsOfExp));
})

function getTime(days, hours) {
   return days * hours;
}

app.get('/hours', (req, res) => {
   const days = parseInt(req.query.days);
   const hours = parseInt(req.query.hours);
   res.send(getTime(days, hours).toString());
})

function getModuleCompletion(username, hasCompleted) {
   return hasCompleted ? `${username} has completed the modules` : `${username} has not completed the modules`;
}

app.get('/module-completion-status', (req, res) => {
   const username = req.query.username;
   const hasCompleted = req.query.hasCompleted === 'true';
   res.send(getModuleCompletion(username, hasCompleted));
})

function getPersonalizedGreeting(city, name) {
   return `Hey, ${name}! What's famous about ${city}?`;
}

app.get('/personalized-greeting', (req, res) => {
   const city = req.query.city;
   const name = req.query.name;
   res.send(getPersonalizedGreeting(city, name));
})

function findAge(birthyear) {
   const cy = new Date().getFullYear();
   return cy - birthyear;
}

app.get('/find-age', (req, res) => {
   const birthyear = parseInt(req.query.birthyear);
   res.send(findAge(birthyear).toString());
})

function findRequiredTime(days, hours) {
   const totalHours = days * hours;
   return totalHours >= 30 ? "The time being dedicated is sufficient for learning functions" : "The time being dedicated is not sufficient for learning functions";
}

app.get('/is-time-sufficient', (req, res) => {
   const days = parseInt(req.query.days);
   const hours = parseInt(req.query.hours);
   res.send(findRequiredTime(days, hours));
})

app.listen(port, () => {
   console.log('Server is running at port:', port);
})