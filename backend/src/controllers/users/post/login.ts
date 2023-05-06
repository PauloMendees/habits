import { Request, Response } from 'express';
import { z } from 'zod';
import { loginUseCase } from '../../../useCases/users/post/loginUseCase';

export async function loginController(req: Request, res: Response) {
  try {
    const bodyObject = z.object({
      email: z.string(),
      password: z.string(),
    });

    const body = bodyObject.parse(req.body);
    const token = await loginUseCase(body);
    return res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(406).json({
        error,
        message: error.message,
      });
    }
    return res.status(500).json({
      error,
      message: 'Erro interno de servidor.',
    });
  }
}
