require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const methodOverride = require("method-override");
const writeaController = require('./controllers/writes');
const app = express();
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

db = mongoose.connection;
db.on('error', (err) => {
    console.log(`${err.message} is mongodb not connected?`)
});
db.on('connected', () => console.log("MONGO is connected?"));
db.on('disconnected', () => console.log('mongo has disconnected'));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`;istening on port ${PORT}`);
});
