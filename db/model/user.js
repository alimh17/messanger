import { Schema, models, model } from 'mongoose'

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }

})


const User = models.user || model("user", userSchema)


export default User