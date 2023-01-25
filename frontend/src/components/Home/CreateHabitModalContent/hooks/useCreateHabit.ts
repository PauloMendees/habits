import { useToast } from '@/contexts/ToastContext';
import useCreateHabits from '@/hooks/habits/useCreateHabits';
import { useState } from 'react';

export default function useCreateHabit() {
  const { mutateAsync: createNewHabit, isLoading } = useCreateHabits();
  const [checkedWeekDays, setCheckedWeekDays] = useState<number[]>([]);
  const { toast } = useToast();

  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  function handleWeekDays(dayNumber: number) {
    if (checkedWeekDays.includes(dayNumber)) {
      const weekDaysWithoutDayNumber = checkedWeekDays.filter((item) => item !== dayNumber);
      setCheckedWeekDays(weekDaysWithoutDayNumber);
    } else {
      setCheckedWeekDays([...checkedWeekDays, dayNumber]);
    }
  }

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const habitTitle = (document.getElementById('habitTitle') as HTMLInputElement)?.value;
    await createNewHabit(
      {
        title: habitTitle,
        weekDays: checkedWeekDays,
      },
      {
        onSuccess: (res) => toast({ message: res.data, type: 'success', withClose: true }),
        onError: () => toast({ message: 'Erro ao criar hábito', type: 'error', withClose: false }),
      },
    );
  };

  return { weekDays, checkedWeekDays, isLoading, onSubmit, handleWeekDays };
}
