const jwt=require('jsonwebtoken')

module.exports = (req,res,next) =>{
    const token = req.headers['x-access-token']

    if(! token) return res.status(403).send({
        auth: false,
        menssage: 'nenhum token fornecido'
    })
    jwt.verify(token, process.env.TOKEN_SECRET, (erro, decodificado) => {
        if(erro) return res.status(403).send({
            auth: false,
            menssage: 'falha ao autenticar token'
        })
        req.infologado = decodificado
        next()
    })
}