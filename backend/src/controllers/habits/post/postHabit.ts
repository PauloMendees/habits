import { Request, Response } from 'express';
import { z } from 'zod';
import { usePostHabit } from '../../../useCases/habits/post/usePostHabit';

export async function postHabitController(req: Request, res: Response) {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) return;
    const bodyObject = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });
    const { title, weekDays } = bodyObject.parse(req.body);
    if (!title || !weekDays) return res.status(406).send('Erro de validação');
    await usePostHabit({ title, weekDays, authToken });
    return res.status(200).send('Hábito criado.');
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Erro interno de servidor',
    });
  }
}
