const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const User = require('../model/user');

const router = express.Router()

router.post("/upload", async (req, res) => {
    const email = req.body.email
    const image = req.files.profile
    const root = `${path.join(__dirname, `../public/uploads/${image.name}`)}`

    const user = await User.findOne({ email })

    image.mv(root, (err) => {
        if (err) {
            res.status(500).send({})
            console.log(err);
        } else {
            user.image = `/uploads/${image.name}`
            user.save()
            res.status(200).json({ message: "تصویر پروفایل به روز رسانی شد", data: user.image })
        }
    })

})



module.exports = router