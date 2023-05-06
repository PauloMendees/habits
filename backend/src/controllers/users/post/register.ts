import { Request, Response } from 'express';
import { z } from 'zod';
import { registerUseCase } from '../../../useCases/users/post/registerUseCase';

export async function registerController(req: Request, res: Response) {
  try {
    const body = z.object({
      email: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
      nickName: z.string(),
    });

    const { confirmPassword, email, nickName, password } = body.parse(req.body);

    await registerUseCase({ email, nickName, password, confirmPassword });

    return res.status(200).send('Usuário criado com sucesso.');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(406).send({
        error,
        message: error.message,
      });
    }
    return res.status(500).send({
      error,
      message: 'Erro interno de servidor.',
    });
  }
}
