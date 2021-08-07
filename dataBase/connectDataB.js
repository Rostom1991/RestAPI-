const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })

const connectDataB = () => {
    mongoose.connect(process.env.secure, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('succeed'))
    .catch((err)=> console.log('error',err))
    
}

module.exports = connectDataB