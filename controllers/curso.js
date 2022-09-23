const Curso = require('../models/curso')

const controller = {}

controller.create = async(req,res) => {
    try{
        await Curso.create(req.body)
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
        const result = await Curso.findAll()
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
        const result = await Curso.findByPk(req.params.id)

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
        const response = await Curso.update(req.body,
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
        const response = await Curso.destroy(
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

module.exports = controller