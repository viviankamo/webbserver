const express = require('express')
const dBModule = require('./dBModule')
const personmodel = require('./PersonModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => 
res.sendFile(clientDir + "index.html"))

app.get('/style.css',  (req, res) => {
    res.sendFile(clientDir + "style.css")
})
app.get('/cofee', (req, res) => {
    res.sendFile(clientDir + "cofee.JPG")
})

app.post('/', (req, res) => {
 let person = personmodel.createPerson(req.body.name, req.body.email, req.body.age)
    dBModule.storeElement
    res.redirect('/')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
