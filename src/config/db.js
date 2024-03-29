require("dotenv").config();

const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = () => {
    return mongoose.connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true}, err => {
        if(err){
            console.log("Connection to DB failed!!");
        }
        else{
            console.log("connection to db Success");
        }
    })
}
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;