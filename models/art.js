const mongoose = require('mongoose');
const Schema = mongoose.Schema

const artSchema = new Schema({
    title: String,
    price: Number
})

module.exports = mongoose.model('Art', artSchema);