import { User } from '@prisma/client';
import { fakeSecret } from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { createHash } from '../../../../providers/cryptography';
import { loginUseCase } from '../loginUseCase';
import { getIdByToken } from '../../../../providers/jwt';

const email = 'teste@gmail.com';
const password = 'testePassword';

describe('Testing loginUseCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = fakeSecret;
  });
  it('Should generate an jwt token', async () => {
    const hash = await createHash(password);

    const mockedUser: User = {
      created_at: new Date(),
      email,
      id: '1234-1234-1234-1234',
      nickname: 'teste',
      password: hash,
    };

    prismaMock.user.findUnique.mockResolvedValue(mockedUser);

    const token = await loginUseCase({ email, password });

    const id = getIdByToken(`Bearer ${token}`);

    expect(id).toBe('1234-1234-1234-1234');
  });

  it('Should not login because of incorrect password', async () => {
    try {
      const hash = await createHash(password);

      const mockedUser: User = {
        created_at: new Date(),
        email,
        id: '1234-1234-1234-1234',
        nickname: 'teste',
        password: hash,
      };

      prismaMock.user.findUnique.mockResolvedValue(mockedUser);

      await loginUseCase({ email, password: 'teste' });
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('E-mail ou senha inválidos.');
      }
    }
  });
});
