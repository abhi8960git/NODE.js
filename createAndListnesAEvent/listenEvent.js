const EventEmitter = require('events');

const Logger = require('./createEvent');

const logger = new Logger();

// register an listner 

logger.on('messageLogged', (arg)=>{
    console.log('listner called ', arg)
});

logger.log('message');