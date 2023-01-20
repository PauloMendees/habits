import { FastifyReply, FastifyRequest } from "fastify";
import { useGetSummary } from "../../../useCases/habits/get/useGetSummary";

export async function getSummaryController(req: FastifyRequest, res: FastifyReply) {
    try {
        const data = await useGetSummary()
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send(error)
    }
}