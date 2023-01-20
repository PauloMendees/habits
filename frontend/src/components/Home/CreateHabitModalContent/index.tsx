import { Check } from '@/assets/icons/check';
import { Button } from '@/components/shared/button';
import { Checkbox } from '@/components/shared/Checkbox';
import { Input } from '@/components/shared/input';
import colors from '@/theme/colors';
import React from 'react';
import useCreateHabit from './hooks/useCreateHabit';

export const CreateHabitModalContent = () => {
  const { weekDays, onSubmit } = useCreateHabit();

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col items-start gap-3 text-white-primary py-4"
    >
      <Input
        label="Qual seu comprometimento?"
        id="title"
        placeholder="Exercícios, dormir bem, etc..."
        isFullWidth
        autoFocus
        type="text"
        required
      />
      <label>Qual a recorrência?</label>
      <div className="w-full flex flex-col gap-2">
        {weekDays.map((day, i) => (
          <Checkbox id={`${day}-checkbox`} label={day} />
        ))}
      </div>
      <Button
        type="submit"
        isFullWidth
        style={{ backgroundColor: colors.brand.green, marginTop: 8 }}
      >
        <Check />
        <span>Confirmar</span>
      </Button>
    </form>
  );
};
