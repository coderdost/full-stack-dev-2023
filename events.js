const EventEmitter = require('events');
const fs = require('fs');
const rr = fs.createReadStream('./data.json');

rr.on('data', (data) => {
    // console.log({data});
});
rr.on('end', (data) => {
    // console.log({data});
});









const em = new EventEmitter()

em.on('demo',(data)=>{
    console.log('demo',data)
})

setTimeout(()=>{
    em.emit('demo',{name:'dummy'});
},5000)
