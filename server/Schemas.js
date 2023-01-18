const { Schema } = require("mongoose");

const AccountSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
    
});
const PostSchema = new Schema({
    user: String,
    title: String,
    post: String,
    like: String,
    date: {
        type: Date,
        default: new Date().getMinutes()
    },
});




module.exports = {
    AccountSchema,
    PostSchema,
};