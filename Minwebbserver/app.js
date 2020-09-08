const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendfile(clientDir + "index.html"))

app.get('/style.css',  (req, res) => {
    res.sendFile(clientDir + 'style.css')
})
app.get('/cofee', (req, res) => {
    res.sendFile(clientDir + "cofee.JPG")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
