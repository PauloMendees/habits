import jwt from 'jsonwebtoken';

export function getIdByToken(authToken: string) {
  const [, token] = authToken.split(' ');
  const secret = process.env.SECRET_KEY;
  const decoded = jwt.verify(token, `${secret}`);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const userId = decoded.id;

  return userId.toString();
}
