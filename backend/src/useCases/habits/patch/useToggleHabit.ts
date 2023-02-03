import dayjs from "dayjs"
import { prisma } from "../../../lib/prisma"
import { getIdByToken } from "../../../providers/jwt"

interface Params {
    id: string
    authToken: string
}

export async function useToggleHabit({ id, authToken }: Params) {
    const todaysDate = dayjs().startOf('day').toDate()

    const userId = getIdByToken(authToken)

    let day = await prisma.day.findUnique({
        where: {
            date: todaysDate
        }
    })

    if (!day) {
        day = await prisma.day.create({
            data: {
                date: todaysDate,
                user_id: userId
            }
        })
    }

    const habitIsAlreadyConcluded = await prisma.completedDayHabits.findUnique({
        where: {
            day_id_habit_id: {
                day_id: day.id,
                habit_id: id
            }
        }
    })

    if (habitIsAlreadyConcluded) {
        await prisma.completedDayHabits.delete({
            where: {
                id: habitIsAlreadyConcluded.id
            }
        })
    } else {
        await prisma.completedDayHabits.create({
            data: {
                day_id: day.id,
                habit_id: id,
                user_id: userId
            }
        })
    }
}