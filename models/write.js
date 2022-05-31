const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// initialize schema
const writeScehma = new Schema({
    title: String,
    body: String
});
// export model
module.exports = mongoose.model('Write', writeScehma);