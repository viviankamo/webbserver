const express = require('express')
const dBModule = require('./dBModule')
const personmodel = require('./PersonModel')
const messageModel = require('./MessageModel')

const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('pages/index.ejs', { name: "" })
})

app.get('/messages', async (req, res) => {
  let messages = await messageModel.getAllMessages()
  res.render("pages/messages.ejs", { messages: messages })
})

app.post('/', (req, res) => {
 let person = personmodel.newPerson(req.body.name, req.body.email, req.body.age)
    databaseModule.storeElement(person)
    
    res.render("pages/index.ejs", { name: " " + req.body.name }) 
  })

  app.post('/postmessage', async (req, res) => {
    let message = messageModel.newMessage(req.body.email, req.body.message)
    databaseModule.storeElement(messages)
    let messages = await messageModel.getAllMessages()
    res.render("pages/messages.ejs", {messages: messages})
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
