import { Response, Request } from "express";
import { z } from 'zod'
import { useGetDay } from "../../../useCases/habits/get/useGetDay";

export async function getDayController(req: Request, res: Response) {
    try {
        const authToken = req.headers.authorization;
        if (!authToken) return
        const objectParams = z.object({
            date: z.coerce.date()
        })
        const { date } = objectParams.parse(req.query)
        const responseData = await useGetDay({ date, authToken })

        return res.status(200).send(responseData)
    } catch (error) {
        return res.status(500).send({
            error,
            message: 'Erro interno de servidor'
        })
    }

}