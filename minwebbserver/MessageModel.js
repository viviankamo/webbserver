exports.newMessage = (email, message) => {
    var message = new Message({
        email: email,
        message: message
    })
    return message
}

exports.getAllMessages = async () => {
    let messages = await Message.find({})
    return messages
}