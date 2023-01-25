import { habitService } from '@/service/habits';
import { useMutation } from '@tanstack/react-query';

export function useToggle() {
  const toggleMutation = async (id: string) =>
    habitService()
      .toggleHabit(id)
      .then((res) => res);

  return useMutation(toggleMutation);
}
