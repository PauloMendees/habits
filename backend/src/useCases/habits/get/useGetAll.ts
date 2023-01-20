import { prisma } from "../../../lib/prisma";

export async function useGetAllHabits() {
    const habits = await prisma.habit.findMany({
        include: {
            weekDays: true
        }
    })

    return habits
}