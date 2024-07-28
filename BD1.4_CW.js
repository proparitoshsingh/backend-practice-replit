const express = require('express');
const app = express();
const port = 3000;

function getWelcomeMessage() {
   return "Welcome to our service!";
}

app.get('/welcome', (req, res) => {
   res.send(getWelcomeMessage());
})

function getGreetingMessage(name) {
   return `Hello, ${name}`;
}

app.get('/greet', (req, res) => {
   const username = req.query.username;
   res.send(getGreetingMessage(username));
})

function checkPasswordStrength(pass) {
   return pass.length > 15 ? "Password is strong" : "Password is weak";
}

app.get('/check-password', (req, res) => {
   const password = req.query.password;
   res.send(checkPasswordStrength(password));
})

function getSum(a, b) {
   return a + b;
}

app.get('/sum', (req, res) => {
   const num1 = parseInt(req.query.num1);
   const num2 = parseInt(req.query.num2);
   res.send(getSum(num1, num2).toString());
})

function getSubscriptionStatus(name, isSubscribed) {
   return `${name} is ${isSubscribed ? "subscribed" : "not subscribed"}`;
}

app.get('/subscription-status', (req, res) => {
   const username = req.query.username;
   const isSubscribed = req.query.isSubscribed === "true";
   res.send(getSubscriptionStatus(username, isSubscribed));
})

function getDiscountedPrice(price, discount) {
   return price - (price * (discount / 100));
}

app.get('/discounted-price', (req, res) => {
   const price = parseFloat(req.query.price);
   const discount = parseFloat(req.query.discount);
   res.send(getDiscountedPrice(price, discount).toString());
})

function getPersonalizedGreeting(age, gender, name) {
   return `Hello, ${name}! You are a ${age} year old ${gender}.`;
}

app.get('/personalized-greeting', (req, res) => {
   const age = parseInt(req.query.age);
   const gender = req.query.gender;
   const name = req.query.name;
   res.send(getPersonalizedGreeting(age, gender, name));
})

function getFinalPrice(price, discount, tax) {
   const discountedPrice = price - (price * (discount / 100));
   return discountedPrice + (discountedPrice * (tax / 100));
}

app.get('/final-price', (req, res) => {
   const price = parseFloat(req.query.price);
   const discount = parseFloat(req.query.discount);
   const tax = parseFloat(req.query.tax);
   res.send(getFinalPrice(price, discount, tax).toString());
})

function getTotalExerciseTime(running, cycling, swimming) {
   return running + cycling + swimming;
}

app.get('/total-exercise-time', (req, res) => {
   const running = parseInt(req.query.running);
   const cycling = parseInt(req.query.cycling);
   const swimming = parseInt(req.query.swimming);
   res.send(getTotalExerciseTime(running, cycling, swimming).toString());
})

app.listen(port, () => {
   console.log('Server is running at port:', port);
})
