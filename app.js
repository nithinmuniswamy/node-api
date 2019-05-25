const express = require('express');
const mongoose = require('mongoose');
const app = express();


const postRoutes = require('./routes/api_route');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('running node-api');
});

mongoose
    .connect('mongodb+srv://nithin:<password>@node-api-8r36a.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(3000, console.log('Server started at porst 3000'));
    })
    .catch(err => console.log(err));