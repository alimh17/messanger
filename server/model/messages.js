const mongoose = require("mongoose");

const messagesSchema = mongoose.Schema({
    messages: [],
})

const Messages = mongoose.model("Messages", messagesSchema)

module.exports = Messages