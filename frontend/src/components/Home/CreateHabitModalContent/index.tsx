import { Check } from '@/assets/icons/Check';
import { Button } from '@/components/shared/Button';
import { Checkbox } from '@/components/shared/Checkbox';
import { Input } from '@/components/shared/Input';
import colors from '@/theme/colors';
import React from 'react';
import useCreateHabit from './hooks/useCreateHabit';

export const CreateHabitModalContent = () => {
  const { weekDays, onSubmit, handleWeekDays, checkedWeekDays, isLoading } = useCreateHabit();

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col items-start gap-3 text-white-primary py-4"
    >
      <Input
        label="Qual seu comprometimento?"
        id="habitTitle"
        placeholder="Exercícios, dormir bem, etc..."
        isFullWidth
        autoFocus
        type="text"
        required
      />
      <label>Qual a recorrência?</label>
      <div className="w-full flex flex-col gap-2">
        {weekDays.map((day, i) => (
          <Checkbox id={`${day}-checkbox`} label={day} checked={checkedWeekDays.includes(i)} onCheckedChange={() => {
            handleWeekDays(i)
          }} />
        ))}
      </div>
      <Button
        type="submit"
        isFullWidth
        style={{ backgroundColor: colors.brand.green, marginTop: 8 }}
        isLoading={isLoading}
      >
        <Check />
        <span>Confirmar</span>
      </Button>
    </form>
  );
};
