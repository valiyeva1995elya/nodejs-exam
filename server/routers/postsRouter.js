const express = require("express");
const { PostModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    PostModel.find({}, (err, result) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    PostModel.find(id, (err, result) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
});


router.post("/", (req,res) => {
    const { user, title, post } = req.body;
    const newPost = new PostModel({ user, title, post, like: 0 });
    newPost.save((err) =>{ 
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("Added new post");
        }
    });
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    PostModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    });
});
module.exports = router