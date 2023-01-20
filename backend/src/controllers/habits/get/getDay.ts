import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { useGetDay } from "../../../useCases/habits/get/useGetDay";

export async function getDayController(req: FastifyRequest, res: FastifyReply) {
    const objectParams = z.object({
        date: z.coerce.date()
    })
    const { date } = objectParams.parse(req.query)
    const responseData = await useGetDay({ date })

    return res.status(200).send(responseData)
}