import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAunthenticated(
  request: Request, 
  response: Response,
  next: NextFunction
) {
  
  // Receber o token
  const authToken = request.headers.authorization
  
  // Validar se token está preenchido
  if(!authToken) return response.status(401).end()
  
  const [,token] = authToken.split(" ")
  
  try {
    // Validar se o token é valido
    const { sub } = verify(token ,"10b936f0ca7326790d27f12acbe1c44b") as IPayload
    
    // Recuperar informações do usuário
    request.user_id = sub
    
    return next()
  } catch(err) {
    return response.status(401).end()
  }  

  return next()
}