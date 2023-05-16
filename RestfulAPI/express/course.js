const express = require('express');

//  express() returns an object of type express 

const app = express();
app.use(express.json());

const courses = [
    {id:0 , name:"hidnei"},
    {id:1 , name:"hidneid"},
    {id:2, name:"hidneis"},
    {id:3 , name:"hidneifs"},
    {id:4 , name:"hidneifsfs"}
];

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/good/:id',(req, res)=>{
const course = courses.find(e => e.id === parseInt(req.params.id));
if(!course) res.status(404).send("course related to this id is not found");
res.send(course);
})


// handling the http post request 

app.get('/good',(req,res)=>{
    res.send(courses);
} )

app.post('/good', (req,res)=>{
    const course = {
        id: courses.length +1 ,
        name:req.body.name
    };

    courses.push(course);
    res.send(courses);
})




const port = process.env.PORT || 3000;

app.listen(port ,()=>{
console.log(`listning to the port ${port}`);
})