const path = require('path');
// path built in module 
const os = require('os');

const fs = require('fs'); 

const EventEmitter = require('events');
const emitter = new EventEmitter();
// always in capslock format eventemiiter is a class


// register a listner 

emitter.on('messageLogged',(arg)=>{
    console.log('Listner called',arg);
})

// raise an event and pass data about the event 

emitter.emit('messageLogged',{id:1 , url: "https://"});

 











































































// const event = new EventEmitter();
// EventEmitter.emit("message logged");

// emit means making a noise signig that event is happened 






// console.log(path);
// console.log(os);

// console.log(os.freemem(),os.totalmem());

// var pathOj = path.parse(__filename);

// console.log(pathOj);

// // console.log(fs);
//  const files= fs.readdirSync('./');

//  fs.readdir('./', function(err, files){
//     if(err) console.log(err);
//     else console.log('Result', files);n
//  })

//  console.log(files);