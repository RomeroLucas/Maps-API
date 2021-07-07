const express = require('express')
const conn = require('../conn')
const mercadoria = express()

mercadoria.route('/mercadoria/:id?')
    .get((req, res, next) => {
        let sql = `SELECT * FROM mercadorias`

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
            nome_mer: req.body.nome_mer,
            end_mer: req.body.end_mer,
        }

        let sql = `INSERT mercadorias SET?`

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
            id_mer : req.params.id,
            nome_mer: req.body.nome_mer,
            end_mer: req.body.end_mer,
        }

        let sql = `UPDATE mercadorias SET? WHERE mercadorias.id_mer = ${dados.id_mer}`

        conn.query(sql, dados, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })

    .delete((req, res, next) => {
        let id_mer = req.params.id

        let sql = `DELETE FROM mercadorias WHERE mercadorias.id_mer = ${id_mer}`

        conn.query(sql, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })


module.exports = mercadoria