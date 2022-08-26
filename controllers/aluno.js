const Aluno = require('../models/aluno')

const controller = {}

controller.create = async(req,res) => {
    try{
        await Aluno.create(req.body)
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
        const result = await Aluno.findAll()
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
        const result = await Aluno.findByPk(req.params.id)

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
        const response = await Aluno.update(req.body,
            {where: {id: req.body.id}})
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

module.exports = controller