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
    const { email, password, name, surname, age } = req.body;
    const newAccount = new AccountModel({ email, password, name, surname, age });
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
    const { email, password, name, surname, age } = req.body;
    await AccountModel.findByIdAndUpdate(id, { email, password, name, surname, age }, (err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("ok")
        }
    });
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    AccountModel.findByIdAndDelete(id, (err) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    })
});

module.exports = router