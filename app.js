const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/pointRelaisRoutes');
const app = express();

const dbUri = 'mongodb+srv://root:root@cluster0.3dlw8.mongodb.net/test'; //atlas
mongoose.connect(dbUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, useCreateIndex: true
    })
    .then((result) => { app.listen(3000); console.log('all ok') })
    .catch(error => console.log(error));

app.use(express.json());
app.use('/pointsRelais', router);