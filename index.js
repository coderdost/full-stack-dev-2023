const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;



const express = require('express');
const server = express();

server.use(express.static('public'))
server.use(express.json())

server.get('/products', (req, res) => {
  res.json(products)
})

server.get('/products', (req, res) => {
  res.json(products)
})

server.post('/products', (req, res) => {
  products.push(req.body);
  res.json(products);

})

server.listen(8081, () => {
  console.log('server started')
});