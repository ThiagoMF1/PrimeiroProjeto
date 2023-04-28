const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')
module.exports = (req, res, next) => {
    console.log('middleware');;
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json ({
            error: true,
            message: 'token no proporcionada'
        })
    }

    const parts = authHeader.split(' ')
    if(parts.length !== 2) {
        return res.status(401).json({
            error: true,
            message: 'tipo de token no válido'
        })
    }
    const [scheme, token] = parts;

    if(scheme.indexOf('Bearer') !== 0) {
        return res.status(401).json({
            error: true,
            message: 'Token mal formateado'
        })
    }

    return jwt.verify(token, authConfig.secret, (err, decoded) => {
       
        console.log(err);
        console.log(decoded);

        if(err){
            return res.status(401).json({
                error: true,
                message: 'token inválido/caducado'
            })
        }
       
        req.userLogged = decoded;


        return next();
    })
}