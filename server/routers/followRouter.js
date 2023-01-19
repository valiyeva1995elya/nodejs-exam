const express = require("express")
const { AccountModel, FollowModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    FollowModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    FollowModel.findById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});
router.post("/", (req, res) => {
    const { idUser } = req.body;
    const newFollower = new FollowModel({ idUser, follow: [] });
    newFollower.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Ok")
        }
    });
});
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { follow } = req.body;
    FollowModel.findByIdAndUpdate(id, { follow }, (err) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("ok")

        }
    });
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    FollowModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    })
});

module.exports = router