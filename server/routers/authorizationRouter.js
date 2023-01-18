const express = require("express");
const { AccountModel } = require("../Models");
const router = express.Router();


router.get("/", (req, res) => {
    const email = req.params.email;
    AccountModel.findById(email, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });


    newAccount.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Added new account")
        }
    });
});