const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

JWTvalidator = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, "LAKSHAY", (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            req.user = data.id;
            next()
        }
    })
}

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0-0hkv1.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error) => {
    if (!error) {
        console.log("Mongo Connection Successful .....");
    }
    else {
        console.log("Error Connecting to Mongo !!!!!" + error);

    }
});



const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercise', JWTvalidator, exercisesRouter);
app.use('/user', usersRouter);


const port = 5000
app.listen(port, () => {
    console.log('Server is running on port: 5000.....');
});