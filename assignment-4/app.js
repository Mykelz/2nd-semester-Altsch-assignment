const express = require('express');

const app = express();

const authorRoute = require('./routes/author')


app.use(authorRoute)


app.listen(4000, ()=>{
    console.log('server is listening at port 4000')
});