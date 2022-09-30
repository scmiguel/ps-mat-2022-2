const jwt=require('jsonwebtoken')

const rotasPermissivas=[{method: 'Post', baseurl: '/usuario'}]

module.exports = (req,res,next) =>{

    const token = req.headers['x-access-token']

    if(token) {        
        jwt.verify(token, process.env.TOKEN_SECRET, (erro, decodificado) => {
            if(erro) return res.status(403).send({
                auth: false,
                menssage: 'falha ao autenticar token'
            })
            req.infologado = decodificado
            next()
        })
    }
    else{
        for(let rota of rotasPermissivas){
            if(req.baseurl === rota.baseurl && req.method === rota.method){
                next()
                return
            }
        }
        return res.status(403).send({
        auth: false,
           menssage: 'nenhum token fornecido'
    }) 
    }    
}