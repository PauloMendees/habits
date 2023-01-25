import { useToggle } from '@/hooks/habits/useToggle';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';

export default function useDayPopOver(date: string) {
  const { mutateAsync } = useToggle();

  const queryClient = useQueryClient();
  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  const weekDays = {
    ['Sunday']: 'Domingo',
    ['Monday']: 'Segunda-feira',
    ['Tuesday']: 'Terça-feira',
    ['Wednesday']: 'Quarta-feira',
    ['Thursday']: 'Quinta-feira',
    ['Friday']: 'Sexta-feira',
    ['Saturday']: 'Sábado',
  };

  async function onCheck(id: string, date: string) {
    await mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  }

  // @ts-ignore
  const dayName = weekDays[dayOfWeek];

  return { dayAndMonth, dayName, onCheck };
}
