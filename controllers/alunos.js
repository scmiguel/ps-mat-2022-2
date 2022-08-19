const Aluno = require('../models/aluno')

const controller = {}

controller.retrieve = async(req,res)=>{
    try {
        const result = await aluno.findAll()
        res.send(result)
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = controller