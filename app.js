const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();


app.use(bodyParser.json());

//Import Routes
const postRoutes = require('./routes/posts');

app.use('/posts',postRoutes);



//Home Route
app.get('/',(req,res)=>{
    res.send("hello this is the home dir")
    });

//Connect to my mongo Db
mongoose.connect(process.env.BD_CONNECTION,
{ useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log('Successfuly Connected'));

//Listen to my precious server
app.listen(3000);

