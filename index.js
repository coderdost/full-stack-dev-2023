require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect('mongodb+srv://haider:Haiderali_560@cluster0.otwulzw.mongodb.net/e-commerce?retryWrites=true&w=majority');
  console.log('connected')
}



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
