import { api } from '../api';
import { routes } from '../api.routes';
import { Summary } from './types';

export default function useHabitService() {
  async function getSummary() {
    return await api.get<Summary[]>(routes.habits.summary).then((res) => res);
  }

  return { getSummary };
}
