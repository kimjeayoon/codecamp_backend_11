import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    personal: String,
    prefer: String,
    pwd: String,
    isAuth: Boolean
})

export const User = mongoose.model("User", userSchema)