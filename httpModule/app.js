 const http = require('http');

 

 const server = http.createServer((req, res)=>{
    if(req.url='./'){
        res.write("good");
        res.end();
    }

 })

 server.listen(3000);

 console.log("listning to the port 3000")