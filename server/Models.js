const mongoose = require("mongoose");
const { AccountSchema, PostSchema, FollowSchema } = require("./Schemas.js");

const AccountModel = mongoose.model("Account", AccountSchema);
const PostModel = mongoose.model("Post", PostSchema);
const FollowModel = mongoose.model("follow", FollowSchema);


module.exports = {
    PostModel,
    AccountModel,
    FollowModel,
}
