const lib = require('./lib.js')
const express = require('express');

console.log('hello ')

const server = express();
server.listen(8080);








// import {sum,diff} from './lib.js';
// const fs = require('fs');

// const t1 = performance.now();

// const txt = fs.readFileSync('demo.txt','utf-8');

// fs.readFile('demo.txt','utf-8',(err, txt)=>{
//    console.log(txt)
// });

// console.log(txt);

// console.log(lib.sum(4,5),lib.diff(3,6))
// const t2 = performance.now();
// console.log(t2-t1);
// const a = 5;

