const EventEmiiter = require('events');

var url = "https://good";

class Logger extends EventEmiiter {
    log(message){
        console.log(message);

        // raise an event

        this.emit('messageLogged',{id:1 , url:"https://good"})
    }
}

module.exports = Logger;