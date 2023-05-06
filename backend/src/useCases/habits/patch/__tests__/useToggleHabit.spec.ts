import {
  fakeID,
  fakeJWT,
  mockedCompletedDayHabit,
  mockedDay,
} from '../../../../jest/mocks';
import { prismaMock } from '../../../../lib/singleton';
import { useToggleHabit } from '../useToggleHabit';

const params = { authToken: fakeJWT, id: fakeID };

describe('Testing useToggleHabit useCase', () => {
  beforeAll(() => {
    process.env.SECRET_KEY = 'your-256-bit-secret';
  });

  it('Case have day and habit is already concluded should return day habit', async () => {
    prismaMock.day.findUnique.mockResolvedValue(mockedDay);
    prismaMock.completedDayHabits.findUnique.mockResolvedValue(
      mockedCompletedDayHabit,
    );
    prismaMock.completedDayHabits.delete.mockResolvedValue(
      mockedCompletedDayHabit,
    );

    await expect(useToggleHabit(params)).resolves.toEqual(
      mockedCompletedDayHabit,
    );
  });

  it('Case havent day and habit isnt already concluded should create day and return day habit', async () => {
    prismaMock.day.findUnique.mockResolvedValue(null);
    prismaMock.day.create.mockResolvedValue(mockedDay);
    prismaMock.completedDayHabits.findUnique.mockResolvedValue(
      mockedCompletedDayHabit,
    );
    prismaMock.completedDayHabits.delete.mockResolvedValue(
      mockedCompletedDayHabit,
    );

    await expect(useToggleHabit(params)).resolves.toEqual(
      mockedCompletedDayHabit,
    );
  });

  it('Case habit already concluded should delete completedDayHabit', async () => {
    prismaMock.day.findUnique.mockResolvedValue(mockedDay);
    prismaMock.completedDayHabits.findUnique.mockResolvedValue(null);
    prismaMock.completedDayHabits.create.mockResolvedValue(
      mockedCompletedDayHabit,
    );

    await expect(useToggleHabit(params)).resolves.toEqual(
      mockedCompletedDayHabit,
    );
  });
});
