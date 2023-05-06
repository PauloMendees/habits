import { Router } from 'express';
import { getHabitsController } from '../../controllers/habits/get/getAll';
import { getDayController } from '../../controllers/habits/get/getDay';
import { getSummaryController } from '../../controllers/habits/get/getSummary';
import { toggleHabitController } from '../../controllers/habits/patch/toggleHabit';
import { postHabitController } from '../../controllers/habits/post/postHabit';
import { authentication } from '../../middlewares/authentication';
import { urls } from '../urls';

const habitsRouter = Router();

habitsRouter.get(urls.habits.get, authentication, getHabitsController);
habitsRouter.get(urls.habits.getDay, authentication, getDayController);
habitsRouter.get(urls.habits.summary, authentication, getSummaryController);
habitsRouter.post(urls.habits.post, authentication, postHabitController);
habitsRouter.patch(
  urls.habits.habitToggle,
  authentication,
  toggleHabitController,
);

export { habitsRouter };
