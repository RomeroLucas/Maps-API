const express = require('express')
const conn = require('../conn')
const cliente = express()

cliente.route('/cliente/:id?')
    .get((req, res, next) => {
        let sql = `SELECT * FROM clientes`

        conn.query(sql, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })

    .post((req, res, next) => {
        let dados = {
            nome_cl: req.body.nome_cl,
            end_cl: req.body.end_cl
        }

        let sql = `INSERT clientes SET?`

        conn.query(sql, dados, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
            
        })
    })

    .put((req, res, next) => {
        let dados = {
            id_cl : req.params.id,
            nome_cl: req.body.nome_cl,
            end_cl: req.body.end_cl
        }

        let sql = `UPDATE clientes SET? WHERE clientes.id_cl = ${dados.id_cl}`

        conn.query(sql, dados, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })

    .delete((req, res, next) => {
        let id_cl = req.params.id

        let sql = `DELETE FROM clientes WHERE clientes.id_cl = ${id_cl}`

        conn.query(sql, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })


module.exports = cliente