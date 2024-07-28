const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());


app.get('/', (req, res) => {
   res.send("Welcome to Stock portfolio analysis API!");
})

app.get('/calculate-returns', (req, res) => {
   const boughtAt = parseFloat(req.query.boughtAt);
   const marketPrice = parseFloat(req.query.marketPrice);
   const quantity = parseInt(req.query.quantity);
   res.send(((marketPrice - boughtAt) * quantity).toString());
})

app.get('/total-returns', (req, res) => {
   const stock1 = parseFloat(req.query.stock1);
   const stock2 = parseFloat(req.query.stock2);
   const stock3 = parseFloat(req.query.stock3);
   const stock4 = parseFloat(req.query.stock4);
   res.send((stock1 + stock2 + stock3 + stock4).toString());
})

app.get('/calculate-return-percentage', (req, res) => {
   const boughtAt = parseFloat(req.query.boughtAt);
   const returns = parseFloat(req.query.returns);
   let returnsPercent = (returns / boughtAt) * 100;
   res.send((returnsPercent).toString());
})

app.get('/total-return-percentage', (req, res) => {
   const stock1 = parseFloat(req.query.stock1);
   const stock2 = parseFloat(req.query.stock2);
   const stock3 = parseFloat(req.query.stock3);
   const stock4 = parseFloat(req.query.stock4);
   res.send((stock1 + stock2 + stock3 + stock4).toString());
})

app.get('/status', (req, res) => {
   const returnPercentage = parseFloat(req.query.returnPercentage);
   returnPercentage > 0 ? res.send("profit") : res.send("loss")
})


app.listen(PORT, () => {
   console.log('Server is listening on port ' + PORT);
})
