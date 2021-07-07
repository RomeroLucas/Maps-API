const express = require('express')
const cors = require('cors')
const app = express()
const conn = require('./src/conn')

const port = 4000


app.use(express.json())
app.use(cors())

const cliente = require('./src/models/clientes')
app.use(cliente)
const mercadoria = require('./src/models/mercadorias')
app.use(mercadoria)
const entrega = require('./src/models/entregas')
app.use(entrega)

app.route('/armazenamento')
    .get((req, res, next) => {
        let sql = `SELECT table_schema AS "Database", ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS "Size (MB)" FROM information_schema.TABLES GROUP BY table_schema;`
        conn.query(sql, (error, result) => {
            if(error) {
                res.status(500).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    })


app.get('/', (req, res, next) => {
    res.json({mensagem: 'Ola mundo'})
})


app.listen(port, ()=> console.log(`API: http://localhost:${port}`))