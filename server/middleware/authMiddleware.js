const jsonwebtoken = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next)=>{
    if(req.method === "OPTIONS"){
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)

        if(!token){
            return res.status(401).json({message:"auth error" })
        }
        
        const decoded = jsonwebtoken.verify(token, config.get('secretKey'))
        console.log(decoded)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message:"error" })
    }
}