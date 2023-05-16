const express = require('express');

//  express() returns an object of type express 

const app = express();


const courses = [
    {id:1 , name:"hidnei"},
    {id:2 , name:"hidneid"},
    {id:3 , name:"hidneis"},
    {id:4 , name:"hidneifs"},
    {id:5 , name:"hidneifsfs"}
];

app.get('/', (req, res)=>{
    res.send("hello world");
})

app.get('/api',(req,res)=>{
    res.send([1,2,3]);
})

app.get('/posts/:year/:month',(req,res)=>{
    res.send(req.params);
})

// for query type endpoint just write query instead of params


 




// synamic port is given by enviroment variable vale is set outside the application 

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listning to port ${port}`);
})