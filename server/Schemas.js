const { Schema } = require("mongoose");

const PostSchema = new Schema({
    name: String,
    surname: String,
    title: String,
    post: String,
    like: String,
    date: {
        type: Date,
        default: Date.now
    },
});
const AccountSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
    posts: [PostSchema],
    follows: []
});

const FollowSchema = new Schema({
    idUser: String,
    follow: [AccountSchema]
});
module.exports = {
    AccountSchema,
    PostSchema,
    FollowSchema
};