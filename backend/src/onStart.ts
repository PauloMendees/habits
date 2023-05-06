import prisma from './lib/prisma';
import { registerUseCase } from './useCases/users/post/registerUseCase';

const defaultEmail = 'teste@teste.com.br';
const defaultPassword = 'T3st@ando.1234';
const defaultNick = 'teste';

export async function onStart() {
  const defaultUserAlreadyAdded = await prisma.user.findUnique({
    where: {
      email: defaultEmail,
    },
  });

  if (defaultUserAlreadyAdded) return;

  await registerUseCase({
    email: defaultEmail,
    confirmPassword: defaultPassword,
    nickName: defaultNick,
    password: defaultPassword,
  });
}
