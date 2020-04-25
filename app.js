const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
const bodyParser = require('body-parser')

const postRoute = require('./routes/posts');

app.use(bodyParser.json())
app.use('/posts',postRoute)


app.get('/', (req,res)=>{
    res.json({'greeter':'Welcome Home!!!'})
})



mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser:true ,  useUnifiedTopology: true } , ()=>{
    console.log('Connected to DB!')
})

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`App is running ${PORT}`)
})