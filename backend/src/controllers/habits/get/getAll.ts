import { FastifyReply, FastifyRequest } from "fastify";
import { useGetAllHabits } from "../../../useCases/habits/get/useGetAll";

export async function getHabitsController(req: FastifyRequest, res: FastifyReply) {
    try {
        const habits = await useGetAllHabits();
        return res.status(200).send(habits)
    } catch (error) {
        res.status(500).send(error)
    }
}