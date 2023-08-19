require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

console.log(process.env.MONGO_PASSWORD)
server.listen(8080, () => {
  console.log('server started');
});
