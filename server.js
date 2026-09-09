import express from 'express'

const app = express()

const HOST = 'localhost'
const PORT = 3000

app.get('/hello', (req, res)=> {
    res.status(200).json({name: "Sviatoslav"})
})
app.get('/hello1', (req, res)=> {
    res.status(200).json({name: "Sviatoslav"})
})

app.get('/coffee', (req, res) => {
    res.status(418).json({
    message: "No coffee!"
    })
})

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})

main 

feat/add-product-endpoint

fix/db 

refactor/changed 