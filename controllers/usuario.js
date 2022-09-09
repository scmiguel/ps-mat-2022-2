const Usuario = require('../models/usuario.js')
const jwt =  require('jsonwebtoken')
const bcrypt = require("bcrypt")

const controller = {}

controller.create = async(req,res) => {
    try{
        await Usuario.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieve = async (req, res) => {
    try {
        const result = await Usuario.findAll()
        // HTTP 200: OK (implícito)
        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async(req,res) => {
    try{
        const result = await Usuario.findByPk(req.params.id)

        if(result){
            res.send(result)
        }
        else{
            res.status(404).end()
        }

        res.result(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async(req,res) => {
    try{
        const response = await Usuario.update(req.body,
            {where: {id: req.params.id}})
            if(response[0]>0){
                res.status(204).end()
            }
            else{
                res.status(404).end()
            }
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}
controller.delete = async(req,res) => {
    try{
        const response = await Usuario.destroy(
            {where: {id: req.params.id}}
        )
        if(response){
            res.status(204).end()
        }
        else{
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.login = async(req,res) => {
    try{
        const usuario = await Usuario.findOne({where: {email: req.body.email}})

        if(!usuario){ //usuario n existe
            //HTTP 401
            res.status(401).end()
        }
        else{
            let senhaOk = await bcrypt.compare(req.body.senha, usuario.hash_senha)

            if(senhaOk){
                const token=jwt.sign({id: usuario.id}, process.env.TOKEN_SECRET, {expiresIn: '8h'})
                res.json({auth: true, token})
            }
            else{//senha invalida
                res.status(401).end()
            }
        }
    }
    catch{
        console.error(error)
        res.status(500).end()
    }
}

module.exports = controller