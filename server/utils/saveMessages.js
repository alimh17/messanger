const _ = require("lodash")
const Messages = require("../model/messages")
const User = require('../model/user');

const objectGenerator = (key, value) => {
    const object = {}
    object.key = key
    object.content = value

    return object
}


const saveMessages = async (roomName, message) => {
    const concat = `${roomName.id}--with--${roomName.to}`
    let split = concat.split('--with--');
    let unique = [...new Set(split)].sort((a, b) => (roomName.id === a ? -1 : 1));
    let updatedRoomName = `${unique[0]}--with--${unique[1]}`;


    try {
        const user = await User.findById(roomName.id)
        const targetUser = await User.findById(roomName.to)
        const object = objectGenerator(updatedRoomName, roomName)
        user.messagesList.push(object)
        targetUser.messagesList.push(object)
        await user.save()
        await targetUser.save()
    } catch (err) {
        console.log(err)
    }

}



// const messages = await Messages.find()
// const key = messages.map(msg => {
//     const key = msg.messages.map(item => {
//         return Object.keys(item)
//     })
//     return key
// })

// const msg = new Object()
// msg[updatedRoomName] = message
// const newMessages = new Messages({
//     messages: msg
// })
// await newMessages.save()


// const flat = _.flattenDeep(key)
// const has = flat.includes(updatedRoomName)

// if (has) {
//     messages.map(msg => {
//         // console.log(Object.keys(msg.messages[0]))
//         console.log(msg.messages[0])
//     })
//     console.log(has)
// }


// const mainMessage = messages[0].messages[0]
// const messagesArr = Object.keys(mainMessage)

// console.log(messagesArr == updatedRoomName)
// messages.map(msg => {
//     console.log(msg.messages)
// })
// const has = msg.messages.includes(updatedRoomName)
// console.log(has)
// return has
// console.log(has)
// messages.push(msg)

// await newMessages.save()
// console.log(messages)

// const newMessages = new Messages(msg)
// await newMessages.save()
// console.log(newMessages)
// const has = messages.includes(updatedRoomName)
// if (has) {

// } else {
//     const newChat = new Messages(msg)
//     await newChat.save()
// }
module.exports = saveMessages