const { Schema } = require("mongoose");

const AccountSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
    follows: [],
});

const PostSchema = new Schema({
    email: String,
    title: String,
    post: String,
    like: Number,
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = {
    AccountSchema,
    PostSchema,
};