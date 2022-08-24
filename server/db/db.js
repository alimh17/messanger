const mongoose = require('mongoose');


const connectDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}`)
        .then(() => console.log(`DB is connected`))
        .catch(err => console.log(`DB is failed , please try again`))
}



module.exports = connectDB