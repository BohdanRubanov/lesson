import express from 'express'

const app = express()

const HOST = 'localhost'
const PORT = 3000

app.get('/hello', (req, res)=> {
    res.status(200).json({name: "Nikita"})
})
app.get('/hello1', (req, res)=> {
    res.status(200).json({name: "Nikita"})
})


app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})
