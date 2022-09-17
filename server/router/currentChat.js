const express = require('express');
const User = require('../model/user');


const router = express.Router()



router.post("/current_chat", async (req, res) => {
    try {
        const { id } = req.body.data.user
        const { _id } = req.body.data.current
        const user = await User.findById(id)

        let messages = user.messagesList.map(message => {
            const split = message.key.split("--with--")
            if (split[0] === id && split[1] === _id || split[0] === _id && split[1] === id) {
                return message
            }
        })
        messages = messages.filter(f => typeof f !== "undefined")

        res.status(200).json({ message: "success", data: messages })

    } catch (err) {
        console.log(err);
    }
})







module.exports = router