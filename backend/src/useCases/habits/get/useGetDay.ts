import dayjs from "dayjs"
import { prisma } from "../../../lib/prisma";

interface Params {
    date: Date
}

export async function useGetDay({ date }: Params) {
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day');
    await prisma.$connect()
    const possibleHabits = await prisma.habit.findMany({
        where: {
            created_at: {
                lte: date
            },
            weekDays: {
                some: {
                    week_day: weekDay
                }
            }
        }
    })

    const completedHabits = await prisma.completedDayHabits.findMany({
        where: {
            day: {
                date: parsedDate.toDate()
            }
        }
    })

    const completedHabitsIds = completedHabits.map((habit) => habit.habit_id)

    await prisma.$disconnect()

    return {
        possibleHabits,
        completedHabits: {
            ids: completedHabitsIds,
            percentage: completedHabits.length/possibleHabits.length
        }
    }
}