// remote logging services for logging 

var url = 'http://mylogger.io/log';

function log(message){
    // send http request
    console.log(message);
}

module.exports.log = log;
// an object export 

module.exports = url;
// a function of variable export 