const express = require('express')
const app = express()
app.use(express.json())
const books =[
    {title: "rumi", id: 1},
    {title: "Atomic Habits", id: 2},
    {title: "Karma", id: 3},
]
app.get('/', (req, resp) =>{
    resp.send('Namaste Sabhi')
})

app.get('/api/books', (req, resp) => {
    resp.send(books)
})

app.get('/api/books/:id', (req, resp) => {
    const book = books.find(v => v.id === parseInt(req.params.id))
    if(!book) resp.status(404).send('books not found')
    resp.send(book)
})

app.post('/api/books/addBook', (req, resp) =>{
    const book = {
        id: books.length+1,
        title: req.body.title
    }
    books.push(book)
    resp.send(book)
})

app.put('/api/books/:id', (req, resp) => {
    const book = books.find(v => v.id === parseInt(req.params.id))
    if(!book) resp.status(404).send('books not found')
    book.title = req.body.title
    resp.send(book)
})

    app.delete('/api/books/:id', (req, resp) => {
        const book = books.find(v => v.id === parseInt(req.params.id))
        if(!book) resp.status(404).send('books not found')
        const index = books.indexOf(book)
        books.splice(index, 1)
        resp.send(book)
})
app.listen(3000)