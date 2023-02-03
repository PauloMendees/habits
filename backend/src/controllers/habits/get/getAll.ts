import { Request, Response } from "express";
import { useGetAllHabits } from "../../../useCases/habits/get/useGetAll";

export async function getHabitsController(req: Request, res: Response) {
    try {
        const authToken = req.headers.authorization;
        if (!authToken) return
        const habits = await useGetAllHabits(authToken);
        return res.status(200).send(habits)
    } catch (error) {
        return res.status(500).send({
            error,
            message: 'Erro interno de servidor'
        })
    }
}