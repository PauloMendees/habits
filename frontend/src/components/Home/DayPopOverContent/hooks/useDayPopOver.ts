import dayjs from 'dayjs';

export default function useDayPopOver(date: string) {
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

  // @ts-ignore
  const dayName = weekDays[dayOfWeek];

  return { dayAndMonth, dayName };
}
