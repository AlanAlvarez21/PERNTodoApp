const PORT = process.env.PORT ?? 8000 
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const { v4: uuidv4 } = require('uuid')

app.use(cors())
app.use(express.json()) // Ensure this line is before your route handlers.


// Get all todos 
app.get('/todos/:userEmail', async (req, res) => {
    const { userEmail } = req.params
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows) 
    } catch (error) {
        console.error(error)
    }
})

// Create new ToDo 
app.post('/todos', async (req, res) => {
    const id = uuidv4();
    const { user_email, title, progress, date } = req.body
    try {
        const newToDo = await pool.query(
            `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
            [id, user_email, title, progress, date]
        )
        res.json(newToDo)
    } catch (error) {
        console.error(error)
    }
})

// Edit ToDo 
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { user_email, title, progress, date } = req.body
    try {
        const editTodo = await pool.query(
            'UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', 
            [user_email, title, progress, date, id]
        )
        res.json(editTodo)
    } catch (error) {
        console.error(error)
    }
});

// Delete a Todo 
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteTodo = await pool.query('DELETE FROM todos WHERE id = $1;',[id])
        res.json(deleteTodo)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, ()=> console.log(`Server runing on PORT: ${PORT}`))