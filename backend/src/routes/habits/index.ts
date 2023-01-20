import { FastifyInstance } from "fastify";
import { getHabitsController } from "../../controllers/habits/get/getAll";
import { getDayController } from "../../controllers/habits/get/getDay";
import { getSummaryController } from "../../controllers/habits/get/getSummary";
import { toggleHabitController } from "../../controllers/habits/patch/toggleHabit";
import { postHabitController } from "../../controllers/habits/post/postHabit";
import { urls } from "../urls";

export async function habitsRoutes(app: FastifyInstance) {
    app.get(urls.habits.get, getHabitsController)
    app.get(urls.habits.getDay, getDayController)
    app.get(urls.habits.summary, getSummaryController)
    app.post(urls.habits.post, postHabitController)
    app.patch(urls.habits.habitToggle, toggleHabitController)
}