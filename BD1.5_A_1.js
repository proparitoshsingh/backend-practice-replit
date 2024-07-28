const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;


app.get('/cart-total', (req, res) => {
   const newItemPrice = parseFloat(req.query.newItemPrice);
   const cartTotal = parseFloat(req.query.cartTotal);
   res.send((cartTotal + newItemPrice).toString());
})

app.get('/membership-discount', (req, res) => {
   const cartTotal = parseFloat(req.query.cartTotal);
   const isMember = req.query.isMember === "true";
   const priceToSend = isMember ? (cartTotal - (cartTotal * (discountPercentage / 100))).toString() : cartTotal.toString();
   res.send(priceToSend);
})

app.get('/calculate-tax', (req, res) => {
   const cartTotal = parseFloat(req.query.cartTotal);
   let totalTax = (cartTotal * (taxRate / 100));
   res.send(totalTax.toString());
})

app.get('/estimate-delivery', (req, res) => {
   const shippingMethod = req.query.shippingMethod;
   const distance = parseFloat(req.query.distance);
   if (shippingMethod === 'standard') {
      res.send((distance / 50).toString());
   } else if (shippingMethod === 'express') {
      res.send((distance / 100).toString());
   } else {
      return res.status(400).send('invalid input');
   }
})

app.get('/shipping-cost', (req, res) => {
   const weight = parseFloat(req.query.weight);
   const distance = parseFloat(req.query.distance);
   res.send((weight * distance * 0.1).toString());
})

app.get('/loyalty-points', (req, res) => {
   const purchaseAmount = parseFloat(req.query.purchaseAmount);
   res.send((purchaseAmount * loyaltyRate).toString());
})

app.listen(port, () => {
   console.log('Server is running at port:', port);
})
