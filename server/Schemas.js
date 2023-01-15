const { Schema } = require("mongoose");

const AccountSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
});



module.exports = {
    AccountSchema,
};