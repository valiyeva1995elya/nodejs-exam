const { Schema } = require("mongoose");

const AccountSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
});



module.exports = {
    AccountSchema,
};