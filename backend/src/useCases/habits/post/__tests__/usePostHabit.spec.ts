import { prismaMock } from '../../../../lib/singleton';
import { usePostHabit } from '../usePostHabit';
import { fakeJWT, mockedHabit } from '../../../../jest/mocks';

describe('Testing usePostHabit useCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = 'your-256-bit-secret';
  });

  it('Should create a habit', async () => {
    prismaMock.habit.create.mockResolvedValue(mockedHabit);
    await expect(
      usePostHabit({ authToken: fakeJWT, title: 'teste', weekDays: [2] }),
    ).resolves.toEqual(mockedHabit);
  });
});
