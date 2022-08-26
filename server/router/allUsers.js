const express = require('express');
const User = require('../model/user');


const router = express.Router()


router.get("/all_users", async (req, res) => {

    try {
        const users = await User.find()
        console.log(users);
        res.status(200).json({ message: "success", data: users })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "failes" })
    }

})



module.exports = router