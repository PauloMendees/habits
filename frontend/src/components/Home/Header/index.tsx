import { Plus } from '@/assets/icons/plus';
import colors from '@/theme/colors';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import { FakeButton } from '../../shared/button';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateHabitModalContent } from '../CreateHabitModalContent';
import { Close } from '@/assets/icons/close';

export function Header() {
  return (
    <header className="max-w-[720px] w-full flex justify-between items-center gap-5">
      <Image src={Logo} width={147.84} height={71.49} alt="System logo" />
      <Dialog.Root>
        <Dialog.Trigger>
          <FakeButton isOutlined>
            <Plus fill={colors.brand.purple} />
            <span className="text-sm lg:text-base">Novo hábito</span>
          </FakeButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black opacity-60 w-screen h-screen fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl max-w-[420px] w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Dialog.Close className="absolute right-6 top-6 hover:opacity-70 duration-200">
              <Close />
            </Dialog.Close>
            <Dialog.Title className="text-white-primary font-extrabold text-[24px] lg:text-[32px]">
              Criar hábito
            </Dialog.Title>
            <CreateHabitModalContent />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
