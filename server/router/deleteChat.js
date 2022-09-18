const express = require('express');
const User = require('../model/user');


const router = express.Router()



router.post("/delete_chat", async (req, res) => {
    const { user, chat: current } = req.body.data
    console.log(user)

    try {
        const findUser = await User.findById(user.id)
        const filter = findUser.chatList.filter(f => f._id !== current._id)

        const concat = `${user.id}--with--${current._id}`
        let split = concat.split('--with--');
        let unique = [...new Set(split)].sort((a, b) => (user.id === a ? -1 : 1));
        let updatedRoomName = `${unique[0]}--with--${unique[1]}`;

        const filteredSendMessages = findUser.messagesList.filter(f => f.key !== updatedRoomName)
        const filteredRecivedMessages = filteredSendMessages.filter(f => f.key !== `${unique[1]}--with--${unique[0]}`)

        findUser.messagesList = filteredRecivedMessages
        findUser.chatList = filter

        await findUser.save()


        res.status(200).json({ message: "success" })
    } catch (err) {
        console.log(err)
    }


})



module.exports = router