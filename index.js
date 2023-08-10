const express = require('express');
const morgan = require('morgan');
const server = express();
const { productRouter } = require('./routes/productRoutes')
const { userRouter } = require('./routes/userRoutes')

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/api', productRouter);
server.use('/api', userRouter);




server.listen(8081, () => {
  console.log('server started');
});
