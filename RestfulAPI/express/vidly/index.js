const Joi = require('joi');
const express = require('express');
const { validate } = require('joi/lib/types/lazy');

const app = express();

app.use(express.json());


const genres=[
    {
        "id": 1,
        "name": "Action"
      },
      {
        "id": 2,
        "name": "Adventure"
      },
      {
        "id": 3,
        "name": "Comedy"
      },
      {
        "id": 4,
        "name": "Drama"
      },
      {
        "id": 5,
        "name": "Fantasy"
      },
      {
        "id": 6,
        "name": "Horror"
      },
      {
        "id": 7,
        "name": "Mystery"
      },
      {
        "id": 8,
        "name": "Romance"
      },
      {
        "id": 9,
        "name": "Science Fiction"
      },
      {
        "id": 10,
        "name": "Thriller"
      }
];


// get request 

app.get("/",(req , res)=>{
    res.send("Hello welcome :)")
})

app.get("/genres",(req,res)=>{
    res.send(genres);
})


app.post("/genress/",(req,res)=>{
    const {error} = validateGenere(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    genre.name = req.body.name;
    res.send(genre);
})

 app.get('/genres/:id',(req,res)=>{
    const genre = genres.find(e => e.id === parseInt(req.params.id))
    if(!genre) return res.status(404).send("genre related to the given id is not found ");
    res.send(genre);
 })


app.put("/genres/:id",(req,res)=>{
    const genre = genres.find(e => e.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("the genre related to the given id is not found , sorry :: ");

    const {error} = validateGenere(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})

app.delete("/genres/:id",(req,res)=>{
    const genre = genres.find(e => e.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("genre related to the following id is not found");

    const index = genres.indexOf(genre);
    genres.splice(index , 1);

   res.send(genre);

})






function validateGenere(genre){
    const schema ={
        name:Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`listning to the port ${port}`))












