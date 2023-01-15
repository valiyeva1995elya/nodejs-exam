const express = require("express");
const { AccountModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    AccountModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

router.post("/", (req, res) => {
    const { fullName, login, password } = req.body;
    const newAccount = new AccountModel({ fullName, login, password });
    newAccount.save((err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("Added new account")
        }
    });
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { fullName, login, password } = req.body;
    await AccountModel.findByIdAndUpdate(id, { fullName, login, password }, (err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("ok")
        }
    });
});

module.exports = router