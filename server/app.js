const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
// set up contact routes

const contactRouter = require("./routes/contactRouter.js")

// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import contactRoutes from './routes/contacts.js';
// import dotenv from 'dotenv';
// dotenv.config();
// using import instead of const require syntax as it is a newer standard
// Both ways function the same 

// use express middleware and app. syntax to connect to the app
const app = express();

app.use('./contacts', contactRouter);

app.use(bodyParser.json({limit: "20mb", extended:true})); // pictures will not exceed 20mb
app.use(bodyParser.urlencoded({limit: "20mb", extended:true})); // extended, will be able to output more than just strings

app.use(cors());

const CONNECTION_URL = "mongodb+srv://<username>:<password>@cluster0.i6r42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGO_URL = CONNECTION_URL.replace("<username>",process.env.MONGO_USERNAME).replace("<password>",process.env.MONGO_PASSWORD);
console.log("mongousernameL " + process.env.MONGO_USERNAME);
console.log("mongo password: " + process.env.MONGO_PASSWORD);

const PORT = process.env.PORT || 5000;


// // Connecting to MongoDB
// mongoose.connect(MONGO_URL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//     // useFindAndModify: false
// }).then(() => app.listen(PORT, () =>
//     console.log('Connection is established and running on port:' + PORT)
// )).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false);

console.log(MONGO_URL)

mongoose.connect(MONGO_URL || "mongodb://localhost", {
  useNewUrlParser: true,
  useUnifiedTopology: true

//   dbName: "snacksinavan"
})

const db = mongoose.connection

db.on("error", err => {
  console.error(err);
  process.exit(1)
})

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port)
})