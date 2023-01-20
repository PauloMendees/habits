import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { useToggleHabit } from "../../../useCases/habits/patch/useToggleHabit";

export async function toggleHabitController(req: FastifyRequest, res: FastifyReply) {
    const objectParams = z.object({
        id: z.string().uuid()
    })

    const { id } = objectParams.parse(req.params)

    try {
        await useToggleHabit({ id })

        return res.status(200).send('Operação concluida.')
    } catch (error) {
        return res.status(500).send(error)
    }
}