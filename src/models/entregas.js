const express = require('express')
const conn = require('../conn')
const entregas = express()

let date = new Date()

entregas.route('/entregas/:id_cl?/:id_mer?')
    .get((req, res, next) => {
        let id_entrega = req.query.id
        let getAll = `
        SELECT entregas.id_entrega, clientes.nome_cl, DATE_FORMAT(entregas.data_entrega, '%d/%m/%y') AS data_entrega, clientes.end_cl, mercadorias.end_mer FROM entregas
        INNER JOIN clientes ON entregas.fk_cliente = clientes.id_cl
        LEFT OUTER JOIN mercadorias ON entregas.fk_mercadoria = mercadorias.id_mer
        `
        let getOne = `
        SELECT entregas.id_entrega, clientes.nome_cl, DATE_FORMAT(entregas.data_entrega, '%d/%m/%y') AS data_entrega, clientes.end_cl, mercadorias.end_mer FROM entregas
        INNER JOIN clientes ON entregas.fk_cliente = clientes.id_cl
        LEFT OUTER JOIN mercadorias ON entregas.fk_mercadoria = mercadorias.id_mer
        WHERE entregas.id_entrega = ${id_entrega}
        `
        let sql
        id_entrega ? sql = getOne : sql = getAll

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
            data_entrega : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            fk_cliente : req.params.id_cl,
            fk_mercadoria : req.params.id_mer
        }

        let sql = `INSERT entregas SET?`
        
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
            id_entrega : req.params.id_entrega,
            data_entrega : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            fk_cliente : req.params.id_cl,
            fk_mercadoria : req.params.id_mer
        }

        let sql = `UPDATE entregas SET? WHERE entregas.id_entrega = ${dados.id_entrega}`

        conn.query(sql, dados, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })

    .delete((req, res, next) => {
        let id_entrega = req.query.id_entrega

        let sql = `DELETE FROM entregas WHERE entregas.id_entrega = ${id_entrega}`

        conn.query(sql, (error, result) => {
            if(error) {

                res.status(500).json(error)

            } else {

                res.status(200).json(result)

            }
        })
    })

module.exports = entregas