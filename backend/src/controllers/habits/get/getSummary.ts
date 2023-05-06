import { Request, Response } from 'express';
import { useGetSummary } from '../../../useCases/habits/get/useGetSummary';

export async function getSummaryController(req: Request, res: Response) {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) return;
    const data = await useGetSummary(authToken);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Erro interno de servidor',
    });
  }
}
