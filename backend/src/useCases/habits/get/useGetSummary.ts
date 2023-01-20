import dayjs from "dayjs";
import { prisma } from "../../../lib/prisma";

export async function useGetSummary() {
    const allDays = await prisma.day.findMany({
        include: {
            completedHabits: true
        }
    })
    const allHabits = await prisma.habit.findMany({
        include: {
            weekDays: true
        }
    })

    const filteredData = allDays.map(day => {
        const filteredHabitsPerDay = allHabits.filter(habit => habit.created_at <= day.date)

        const parsedDate = dayjs(day.date).startOf('day')
        const weekDay = parsedDate.get('day');

        const habitsWithWeekDays = filteredHabitsPerDay.map((habit) => {
            return {
                id: habit.id,
                weekDays: habit.weekDays.map(weekDay => weekDay.week_day)
            }
        })
        const filteredHabitsByWeekDay = habitsWithWeekDays.filter(habit => habit.weekDays.includes(weekDay))

        return {
            id: day.id,
            date: day.date,
            completed: day.completedHabits.length,
            amount: filteredHabitsByWeekDay.length
        }
    })

    return filteredData
}