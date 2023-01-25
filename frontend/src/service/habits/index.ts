import { api } from '..';
import { routes } from '../routes';
import { GetDayQueryParams, GetDayResponse, PostPayload, Summary } from './types';

export function habitService() {
  async function create(payload: PostPayload) {
    return await api.post<string>(routes.habits.post, payload).then((res) => res);
  }

  async function summary() {
    return await api.get<Summary[]>(routes.habits.summary).then((res) => res);
  }

  async function getDay(params: GetDayQueryParams) {
    const qs = '?' + new URLSearchParams(params).toString();
    return await api.get<GetDayResponse>(`${routes.habits.getDay}${qs}`).then((res) => res);
  }

  async function toggleHabit(id: string) {
    return await api.patch(routes.habits.habitToggle(id)).then((res) => res);
  }

  return { create, summary, getDay, toggleHabit };
}
