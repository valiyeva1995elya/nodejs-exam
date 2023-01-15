const mongoose = require("mongoose");
const { AccountSchema } = require("./Schemas.js");

const AccountModel = mongoose.model("Account", AccountSchema);


module.exports = {
    AccountModel,
}
