const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  console.log('manual cors');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const pizzas = [{id: 1, name: 'one', toppings: []}, {id: 2, name: 'two', toppings : []}];

app.get('/pizzas', (req, res) => {
  res.json(pizzas);
});

const server = app.listen(3000,  () => {
  console.log('app running on port.', server.address().port);
});
