const mongoose = require('mongoose')
const { Schema, model } = mongoose
const schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number }
})

const user = model('user', schema)
module.exports = user