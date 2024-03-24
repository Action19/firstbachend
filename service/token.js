const   Jwt = require('jsonwebtoken')

module.exports =  function generateJWTToken(userId, role){
  const accessToken = Jwt.sign({userId, role}, 'simul@te.uz-0.0.1', {expiresIn: '30d'})
  return accessToken
}

