import dayjs from "dayjs"
import { prisma } from "../../../lib/prisma"

interface Params {
  title: string,
  weekDays: number[]
}

export async function usePostHabit({ title, weekDays }: Params) {
  const today = dayjs().startOf('day').toDate()

  await prisma.$connect()
  await prisma.habit.create({
    data: {
      title,
      created_at: today,
      weekDays: {
        create: weekDays.map(day => {
          return {
            week_day: day
          }
        })
      }
    }
  })
  await prisma.$disconnect()
}