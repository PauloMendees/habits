import { fakeJWT, fakeSecret } from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { useGetAllHabits } from '../useGetAll';

describe('Testing useGetAll useCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = fakeSecret;
  });

  it('Should return mocked value', async () => {
    prismaMock.habit.findMany.mockResolvedValue([]);

    await expect(useGetAllHabits(fakeJWT)).resolves.toEqual([]);
  });
});
