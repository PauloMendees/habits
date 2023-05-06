import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function authentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).send('Autenticação inválida.');
  }

  const [, token] = authToken.split(' ');

  try {
    verify(token, `${process.env.SECRET_KEY}`);

    return next();
  } catch (error) {
    return response.status(401).send('Autenticação inválida.');
  }
}
