import { User } from '@prisma/client';
import { fakeSecret } from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { createHash } from '../../../../providers/cryptography';
import { registerUseCase } from '../registerUseCase';

describe('Testing registerUseCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = fakeSecret;
  });

  it('Should create user correctly', async () => {
    const email = 'teste@gmail.com';
    const password = 'sc.nextLine()1234';
    const nickName = 'teste';
    const hash = await createHash(password);

    const mockedUser: User = {
      created_at: new Date(),
      email,
      id: '1234-1234-1234-1234',
      nickname: nickName,
      password: hash,
    };
    prismaMock.user.create.mockResolvedValue(mockedUser);

    const createdUser = await registerUseCase({
      email,
      password,
      nickName,
      confirmPassword: password,
    });

    expect(createdUser.email).toBe(email);
  });

  it('Should not create a user because of the password', async () => {
    try {
      const email = 'teste@gmail.com';
      const password = 'sc.nextLine';
      const nickName = 'teste';
      const hash = await createHash(password);

      const mockedUser: User = {
        created_at: new Date(),
        email,
        id: '1234-1234-1234-1234',
        nickname: nickName,
        password: hash,
      };
      prismaMock.user.create.mockResolvedValue(mockedUser);

      await registerUseCase({
        email,
        password,
        nickName,
        confirmPassword: password,
      });

      expect(registerUseCase).toThrow(Error);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Senha não cumpre os requisitos.');
      }
    }
  });
});
