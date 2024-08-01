import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.status(200).json({ 
        nome: 'Lucas Batista', 
        email: '@gmail.com'
    })
})

app.listen(port, () => {
    console.log(`Server running! Port ${port}`)
})