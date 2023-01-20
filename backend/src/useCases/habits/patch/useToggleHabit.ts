import dayjs from "dayjs"
import { prisma } from "../../../lib/prisma"

interface Params {
    id: string
}

export async function useToggleHabit({ id }: Params) {
    const todaysDate = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
        where: {
            date: todaysDate
        }
    }) 

    if (!day) {
        day = await prisma.day.create({
            data: {
                date: todaysDate
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
                habit_id: id
            }
        })
    }
}