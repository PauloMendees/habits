import { Request, Response } from "express";
import { z } from 'zod'
import { useToggleHabit } from "../../../useCases/habits/patch/useToggleHabit";

export async function toggleHabitController(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    if (!authToken) return
    const objectParams = z.object({
        id: z.string().uuid()
    })

    const { id } = objectParams.parse(req.params)

    try {
        await useToggleHabit({ id, authToken })

        return res.status(200).send('Operação concluida.')
    } catch (error) {
        return res.status(500).send({
            error,
            message: 'Erro interno de servidor'
        })
    }
}