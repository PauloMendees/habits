import { useState } from 'react';

export default function useCreateHabit() {
  const [checkedDays, setCheckedDays] = useState<number[]>([]);
  const [title, setTitle] = useState<string>('');

  function handleTitle(value: string) {
    setTitle(value);
  }

  function toggleCheckedDays(value: number) {
    if (checkedDays.includes(value)) {
      const arrayWithoutValue = checkedDays.filter((item) => item !== value);
      setCheckedDays(arrayWithoutValue);
    } else {
      setCheckedDays([...checkedDays, value]);
    }
  }

  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  return { weekDays, checkedDays, title, toggleCheckedDays, handleTitle };
}
