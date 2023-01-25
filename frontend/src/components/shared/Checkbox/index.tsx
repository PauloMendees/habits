import React from 'react';
import * as RaddixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '../../../assets/icons/Check';

type Params = RaddixCheckbox.CheckboxProps & {
  id: string;
  label?: string;
};

export const Checkbox = ({ id, label, ...rest }: Params) => {
  return (
    <div className="flex items-center text-white-primary gap-3">
      <RaddixCheckbox.Root
        id={id}
        className="h-8 w-8 rounded-lg group flex items-center text-white-primary gap-3"
        {...rest}
      >
        <div className="flex items-center justify-center bg-zinc-900 border-2 h-8 w-8 rounded-lg  border-zinc-800  group-data-[state=checked]:bg-brand-green group-data-[state=checked]:border-brand-green">
          <RaddixCheckbox.Indicator className="flex items-center justify-center">
            <Check />
          </RaddixCheckbox.Indicator>
        </div>
      </RaddixCheckbox.Root>
      {label ?? (
        <label htmlFor={id} className="text-xl font-semibold text-white-primary">
          {label}
        </label>
      )}
    </div>
  );
};
